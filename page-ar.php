<?php
/*
Template Name: Page (AR)
*/
?>
<?php get_header('ar'); ?>

<div style="max-width:1100px;margin:60px auto;padding:0 40px;">
  <?php if(have_posts()): while(have_posts()): the_post(); ?>
    
    <!-- Because of the code in functions.php, the_title() and the_content() 
         will now automatically output the "About-ar" Elementor data! -->
    <h1 style="font-family:'Cairo',Arial,sans-serif;font-size:2.2rem;margin-bottom:24px;padding-bottom:16px;border-bottom:3px solid #008080;"><?php the_title(); ?></h1>
    <div class="entry-content"><?php the_content(); ?></div>
    
  <?php endwhile; endif; ?>
</div>

<?php get_footer('ar'); ?>