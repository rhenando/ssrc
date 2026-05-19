<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="rtl" lang="ar">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: '#003366', 'navy-dark': '#002244', 'navy-mid': '#004080',
            teal: '#008080', 'teal-hover': '#009999', 'teal-pale': '#e6f3f3',
            'gray-light': '#f0f2f5', muted: '#6b7a8d', border: '#dde2ea', text: '#3d4f63',
          },
          fontFamily: {
            head:   ['"Cairo"', 'Arial', 'sans-serif'],
            body:   ['"Cairo"', 'Arial', 'sans-serif'],
            arabic: ['"Cairo"', 'Arial', 'sans-serif'],
          },
          boxShadow: {
            'nav': '0 2px 16px rgba(0,0,0,.25)',
            'card': '0 12px 36px rgba(0,51,102,.1)',
            'card-lg': '0 16px 52px rgba(0,51,102,.13)',
          },
        }
      }
    }
  </script>

  <?php wp_head(); ?>
</head>
<body <?php body_class('font-arabic text-text bg-white'); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#main">انتقل إلى المحتوى</a>

<div id="page">

  <!-- ═══ NAVBAR ═══ -->
  <header id="masthead" class="bg-navy border-b-[3px] border-teal sticky top-0 right-0 w-full z-[999] shadow-nav">
    <div class="max-w-[1200px] mx-auto px-6 md:px-10 h-[66px] flex items-center">

      <!-- Logo (ml-auto pushes right in RTL) -->
      <div class="flex items-center flex-shrink-0 ml-auto">
        <a href="<?php echo esc_url( ssrc_lang_url('/') ); ?>" class="flex items-center no-underline">
          <img src="<?php echo esc_url( get_template_directory_uri() . '/ssrc.svg' ); ?>" alt="SSRC Logo" class="h-[50px] w-auto object-contain">
        </a>
      </div>

      <!-- Nav links (desktop) -->
      <?php wp_nav_menu([
        'theme_location' => 'primary',
        'container'      => false,
        'menu_class'     => 'primary-nav hidden md:flex items-center gap-0.5 flex-shrink-0',
        'fallback_cb'    => function() {
          echo '<nav class="primary-nav hidden md:flex items-center gap-0.5 flex-shrink-0" id="primary-nav">';
          $items = ['/' => 'الرئيسية', '/about' => 'عن الشركة', '/services' => 'الخدمات', '/engineering' => 'المجالس الهندسية', '/downloads' => 'التحميلات', '/contact' => 'تواصل معنا'];
          foreach ($items as $path => $label) {
            echo '<a href="' . esc_url(ssrc_lang_url($path)) . '"
                     class="text-white/80 text-[.9rem] font-medium px-3 py-2 rounded-md hover:text-teal hover:bg-teal/10 transition-all whitespace-nowrap">'
                 . esc_html($label) . '</a>';
          }
          echo '</nav>';
        },
        'items_wrap' => '<nav class="primary-nav hidden md:flex items-center gap-0.5 flex-shrink-0" id="primary-nav">%3$s</nav>',
      ]); ?>

      <!-- CTA button -->
      <div class="flex-shrink-0 mr-5 hidden md:block">
        <a href="<?php echo esc_url( ssrc_lang_url('/contact') ); ?>"
           class="inline-flex items-center gap-1.5 bg-teal text-white text-sm font-semibold px-5 py-2.5 rounded-[7px] border-2 border-teal hover:bg-transparent hover:text-teal transition-all whitespace-nowrap">
          تواصل معنا
          <svg class="arrow-flip" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <!-- Language switcher -->
      <div class="flex items-center gap-0.5 flex-shrink-0 mr-3 pr-3 border-r border-white/20"
           role="navigation" aria-label="مبدّل اللغة">
        <?php
        $is_ar  = function_exists( 'ssrc_is_arabic' ) && ssrc_is_arabic();
        $en_url = esc_url( add_query_arg( 'ssrc_lang', 'en', remove_query_arg( 'ssrc_lang' ) ) );
        $ar_url = esc_url( add_query_arg( 'ssrc_lang', 'ar', remove_query_arg( 'ssrc_lang' ) ) );

        foreach ( [ 'en' => $en_url, 'ar' => $ar_url ] as $code => $url ) :
          $is_active = ( $code === 'ar' ) ? $is_ar : ! $is_ar;
          $cls = $is_active ? 'text-white font-bold' : 'text-white/45 font-semibold';
        ?>
          <a href="<?php echo $url; ?>"
             class="<?php echo $cls; ?> text-[.72rem] px-1.5 py-1 hover:text-white/90 transition-colors"
             lang="<?php echo esc_attr( $code ); ?>"
             <?php echo $is_active ? 'aria-current="true"' : ''; ?>>
            <?php echo esc_html( strtoupper( $code ) ); ?>
          </a>
          <?php if ( $code !== 'ar' ) : ?>
            <span class="text-white/20 text-[.65rem]" aria-hidden="true">|</span>
          <?php endif; ?>
        <?php endforeach; ?>
      </div>

      <!-- Hamburger -->
      <button class="menu-toggle md:hidden flex-shrink-0 mr-3 flex items-center justify-center min-w-[44px] min-h-[44px] bg-transparent border-2 border-white/40 rounded-md text-white hover:border-teal hover:bg-teal/15 transition-all"
              aria-expanded="false" aria-controls="primary-nav-mobile">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

    </div>

    <!-- Mobile nav -->
    <div class="md:hidden hidden w-full flex-col border-t border-white/10 px-5 pb-3" data-mobile-nav>
      <?php
      $mobile_items = ['/' => 'الرئيسية', '/about' => 'عن الشركة', '/services' => 'الخدمات', '/engineering' => 'المجالس الهندسية', '/downloads' => 'التحميلات', '/contact' => 'تواصل معنا'];
      foreach ($mobile_items as $path => $label) :
      ?>
        <a href="<?php echo esc_url(ssrc_lang_url($path)); ?>"
           class="text-white/80 text-base font-medium py-3 px-2 border-b border-white/5 hover:text-teal transition-colors last:border-0">
          <?php echo esc_html($label); ?>
        </a>
      <?php endforeach; ?>
      <a href="<?php echo esc_url(ssrc_lang_url('/contact')); ?>"
         class="mt-3 inline-flex items-center justify-center gap-2 bg-teal text-white text-sm font-semibold px-5 py-2.5 rounded-[7px] border-2 border-teal hover:bg-transparent hover:text-teal transition-all">
        تواصل معنا
        <svg class="arrow-flip" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>

  </header>

  <div id="content">
    <main id="main">
