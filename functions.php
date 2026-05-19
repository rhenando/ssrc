<?php
if ( ! defined( 'ABSPATH' ) ) exit;

/* --------------------------------------------------
   SETUP
-------------------------------------------------- */
function ssrc_setup() {
    load_theme_textdomain( 'ssrc', get_template_directory() . '/languages' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'html5', [ 'search-form','comment-form','comment-list','gallery','caption','style','script' ] );
    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'custom-logo', [
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ] );
    register_nav_menus( [ 'primary' => __( 'Primary Menu', 'ssrc' ) ] );
}
add_action( 'after_setup_theme', 'ssrc_setup' );

/* --------------------------------------------------
   DOWNLOADS
-------------------------------------------------- */
function ssrc_get_downloads() {
    return [
        [
            'file'        => 'ssrc-project-01-en.pdf',
            'description' => 'SSRC project document.',
            'description_ar' => 'ملف مشروع SSRC.',
            'icon'        => '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/>',
        ],
        [
            'file'        => 'ssrc-project-01-ar.pdf',
            'description' => 'SSRC project document.',
            'description_ar' => 'ملف مشروع SSRC.',
            'icon'        => '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="M8 7h8"/><path d="M8 11h8"/>',
        ],
    ];
}

function ssrc_is_downloads_request() {
    if ( get_query_var( 'ssrc_downloads' ) ) {
        return true;
    }

    global $wp;
    $request = isset( $wp->request ) ? trim( $wp->request, '/' ) : '';
    if ( $request === 'downloads' ) {
        return true;
    }

    $path = isset( $_SERVER['REQUEST_URI'] ) ? trim( parse_url( $_SERVER['REQUEST_URI'], PHP_URL_PATH ), '/' ) : '';
    return $path === 'downloads';
}

function ssrc_current_lang() {
    return ssrc_is_arabic() ? 'ar' : 'en';
}

function ssrc_lang_url( $path = '/' ) {
    return add_query_arg( 'ssrc_lang', ssrc_current_lang(), home_url( $path ) );
}

add_action( 'init', function() {
    add_rewrite_rule( '^downloads/?$', 'index.php?ssrc_downloads=1', 'top' );
} );

add_filter( 'query_vars', function ( $vars ) {
    $vars[] = 'ssrc_downloads';
    return $vars;
} );

add_action( 'after_switch_theme', function() {
    add_rewrite_rule( '^downloads/?$', 'index.php?ssrc_downloads=1', 'top' );
    flush_rewrite_rules();
} );

add_filter( 'wp_nav_menu_items', function( $items, $args ) {
    if ( ( $args->theme_location ?? '' ) !== 'primary' || str_contains( $items, '/downloads' ) ) {
        return $items;
    }

    $label = ssrc_is_arabic() ? 'التحميلات' : __( 'Downloads', 'ssrc' );
    $class = 'text-white/80 text-[.9rem] font-medium px-3 py-2 rounded-md hover:text-teal hover:bg-teal/10 transition-all whitespace-nowrap';

    return $items . '<li class="menu-item menu-item-downloads"><a href="' . esc_url( ssrc_lang_url( '/downloads' ) ) . '" class="' . esc_attr( $class ) . '">' . esc_html( $label ) . '</a></li>';
}, 10, 2 );

add_filter( 'nav_menu_link_attributes', function( $atts ) {
    if ( empty( $atts['href'] ) ) {
        return $atts;
    }

    $home = home_url();
    if ( strpos( $atts['href'], $home ) === 0 || strpos( $atts['href'], '/' ) === 0 ) {
        $atts['href'] = add_query_arg( 'ssrc_lang', ssrc_current_lang(), $atts['href'] );
    }

    return $atts;
} );

/* --------------------------------------------------
   ENQUEUE
-------------------------------------------------- */
function ssrc_enqueue() {
    wp_enqueue_style( 'ssrc-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&family=Cairo:wght@400;600;700;800&display=swap',
        [], null
    );
    wp_enqueue_style( 'ssrc-style', get_stylesheet_uri(), [ 'ssrc-fonts' ], '1.0' );

    if ( ssrc_is_arabic() ) {
        wp_enqueue_style( 'ssrc-rtl', get_template_directory_uri() . '/style-rtl.css', [ 'ssrc-style' ], '1.0' );
    }

    wp_enqueue_script( 'ssrc-js', get_template_directory_uri() . '/assets/js/main.js', [], '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'ssrc_enqueue' );

/* --------------------------------------------------
   WIDGETS
-------------------------------------------------- */
function ssrc_widgets() {
    $base = [
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="f-col-title">',
        'after_title'   => '</h4>',
    ];
    register_sidebar( array_merge( $base, [ 'name' => 'Footer – About',    'id' => 'footer-1' ] ) );
    register_sidebar( array_merge( $base, [ 'name' => 'Footer – Links',    'id' => 'footer-2' ] ) );
    register_sidebar( array_merge( $base, [ 'name' => 'Footer – Services', 'id' => 'footer-3' ] ) );
    register_sidebar( array_merge( $base, [ 'name' => 'Footer – Contact',  'id' => 'footer-4' ] ) );
}
add_action( 'widgets_init', 'ssrc_widgets' );

/* --------------------------------------------------
   CUSTOMIZER
-------------------------------------------------- */
function ssrc_customizer( $c ) {
    $c->add_section( 'ssrc_opts', [ 'title' => 'SSRC Settings', 'priority' => 30 ] );
    foreach ( [
        'ssrc_email'     => [ 'Footer Email',     'info@ssrcinsights.com' ],
        'ssrc_phone'     => [ 'Footer Phone',     '(123) 456-7890' ],
        'ssrc_copyright' => [ 'Copyright Text',   '&copy; ' . date('Y') . ' SSRC. All rights reserved.' ],
    ] as $key => [ $label, $default ] ) {
        $c->add_setting( $key, [ 'default' => $default, 'sanitize_callback' => 'wp_kses_post' ] );
        $c->add_control( $key, [ 'label' => $label, 'section' => 'ssrc_opts', 'type' => 'text' ] );
    }
}
add_action( 'customize_register', 'ssrc_customizer' );

/* --------------------------------------------------
   DOCUMENT TITLE
-------------------------------------------------- */
add_filter( 'document_title_parts', function( $parts ) {
    $is_ar        = function_exists( 'ssrc_is_arabic' ) && ssrc_is_arabic();
    $default_site = 'SSRC';

    if ( ssrc_is_downloads_request() ) {
        $parts['title'] = $is_ar ? 'التحميلات' : 'Downloads';
        $parts['site']  = $default_site;
        return $parts;
    }

    // Engineering page gets its own brand name
    $eng_titles = [ 'Engineering Boards', 'Engineering Boards-ar', 'Engineering' ];
    $page_title  = $parts['title'] ?? '';

    if ( in_array( $page_title, $eng_titles, true ) ) {
        $parts['title'] = $is_ar ? 'الهندسة' : 'Engineering';
        $parts['site']  = $is_ar ? 'مكتب موارد طيبة للاستشارات' : 'Mawared Taybah Consultancy';
    } else {
        $parts['site'] = $default_site;
        if ( $page_title === 'Site Title' ) {
            unset( $parts['title'] );
        }
    }

    // Strip default WordPress tagline
    if ( isset( $parts['tagline'] ) &&
         str_contains( strtolower( $parts['tagline'] ), 'wordpress' ) ) {
        unset( $parts['tagline'] );
    }

    return $parts;
} );

add_filter( 'document_title_separator', fn() => '·' );

/* --------------------------------------------------
   MISC
-------------------------------------------------- */
remove_action( 'wp_head', 'wp_generator' );
add_filter( 'excerpt_length', fn() => 22, 999 );
add_filter( 'excerpt_more',   fn() => '&hellip;' );

/* ==================================================
   LANGUAGE DETECTION
   Priority: ?ssrc_lang= param → cookie → browser Accept-Language
================================================== */

// Register ssrc_lang so WordPress passes it through query vars
add_filter( 'query_vars', function ( $vars ) {
    $vars[] = 'ssrc_lang';
    return $vars;
} );

/**
 * Returns true when the current request should render Arabic.
 * 1. Explicit ?ssrc_lang=ar/en in the URL (user clicked switcher)
 * 2. Cookie from a previous explicit choice
 * 3. Browser's Accept-Language header (auto-detect, no cookie yet)
 */
function ssrc_is_arabic() {
    // 1. Explicit param — highest priority
    if ( isset( $_GET['ssrc_lang'] ) ) {
        return 'ar' === sanitize_key( $_GET['ssrc_lang'] );
    }
    // 2. Remembered preference
    if ( isset( $_COOKIE['ssrc_lang'] ) ) {
        return 'ar' === sanitize_key( $_COOKIE['ssrc_lang'] );
    }
    // 3. Browser language detection. Use the highest-priority language only.
    if ( isset( $_SERVER['HTTP_ACCEPT_LANGUAGE'] ) ) {
        $header = sanitize_text_field( wp_unslash( $_SERVER['HTTP_ACCEPT_LANGUAGE'] ) );
        $best_lang = '';
        $best_q = -1;

        foreach ( explode( ',', $header ) as $index => $part ) {
            $pieces = array_map( 'trim', explode( ';', $part ) );
            $lang = strtolower( $pieces[0] ?? '' );
            $q = 1 - ( $index * 0.001 );

            foreach ( array_slice( $pieces, 1 ) as $piece ) {
                if ( strpos( $piece, 'q=' ) === 0 ) {
                    $q = (float) substr( $piece, 2 );
                    break;
                }
            }

            if ( $lang && $q > $best_q ) {
                $best_lang = $lang;
                $best_q = $q;
            }
        }

        return strpos( $best_lang, 'ar' ) === 0;
    }
    return false;
}

// Persist explicit ?ssrc_lang= choice to a long-lived cookie
add_action( 'template_redirect', function () {
    if ( isset( $_GET['ssrc_lang'] ) ) {
        $lang = sanitize_key( $_GET['ssrc_lang'] );
        if ( in_array( $lang, [ 'ar', 'en' ], true ) ) {
            setcookie( 'ssrc_lang', $lang, time() + YEAR_IN_SECONDS, '/' );
        }
    }
}, 1 );


/* ==================================================
   ELEMENTOR COMPATIBILITY: DYNAMIC PAGE SWAP
   If URL is /ar/about, secretly load the "about-ar" 
   page so Elementor renders the correct Arabic layout.
================================================== */
add_filter( 'request', function( $query_vars ) {
    // Detect Arabic from the query var (set by ?ssrc_lang=ar) or directly from $_GET
    $is_ar = ( isset( $query_vars['ssrc_lang'] ) && $query_vars['ssrc_lang'] === 'ar' )
          || ( isset( $_GET['ssrc_lang'] ) && $_GET['ssrc_lang'] === 'ar' );

    if ( $is_ar && isset( $query_vars['pagename'] ) ) {
        $ar_slug = $query_vars['pagename'] . '-ar';
        $ar_page = get_page_by_path( $ar_slug, OBJECT, 'page' );
        if ( $ar_page ) {
            $query_vars['pagename'] = $ar_slug;
        }
    }
    return $query_vars;
} );


/* ==================================================
   TEMPLATE LOADER
   1. Filename swap: page.php → page-ar.php
   2. Slug fallback: page slug "about" → about-ar.php
================================================== */
add_filter( 'template_include', function ( $template ) {
    if ( ssrc_is_downloads_request() ) {
        $downloads_template = get_template_directory() . ( ssrc_is_arabic() ? '/page-downloads-ar.php' : '/page-downloads.php' );
        if ( file_exists( $downloads_template ) ) {
            status_header( 200 );
            return $downloads_template;
        }
    }

    if ( ! ssrc_is_arabic() ) return $template;

    $ar_file = str_replace( '.php', '-ar.php', $template );
    if ( file_exists( $ar_file ) ) return $ar_file;

    if ( is_page() ) {
        $slug = get_queried_object()->post_name;
        if ( $slug ) {
            $slug_file = get_template_directory() . '/' . $slug . '-ar.php';
            if ( file_exists( $slug_file ) ) return $slug_file;
        }
    }

    return $template;
}, 999 );
