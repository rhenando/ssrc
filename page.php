<?php get_header(); ?>
<div style="max-width:1100px;margin:60px auto;padding:0 40px;">
  <?php if(have_posts()): while(have_posts()): the_post(); ?>
    <h1 style="font-size:2.2rem;margin-bottom:24px;padding-bottom:16px;border-bottom:3px solid var(--teal);"><?php the_title(); ?></h1>
    <div><?php the_content(); ?></div>
  <?php endwhile; endif; ?>
</div>
<?php get_footer(); ?>
