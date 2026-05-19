<?php get_header('ar'); ?>
<div style="max-width:1100px;margin:60px auto;padding:0 40px;">
  <?php if(have_posts()): while(have_posts()): the_post(); ?>
    <article style="margin-bottom:36px;border:1px solid var(--border);border-radius:14px;overflow:hidden;">
      <?php if(has_post_thumbnail()): ?><a href="<?php the_permalink();?>"><?php the_post_thumbnail('large',['style'=>'width:100%;max-height:300px;object-fit:cover;']); ?></a><?php endif; ?>
      <div style="padding:26px 30px;">
        <h2 style="margin-bottom:8px;font-size:1.3rem;"><a href="<?php the_permalink();?>" style="color:var(--navy);text-decoration:none;"><?php the_title(); ?></a></h2>
        <p style="font-size:.8rem;color:var(--muted);margin-bottom:12px;"><?php echo get_the_date(); ?></p>
        <?php the_excerpt(); ?>
        <a href="<?php the_permalink();?>" style="color:var(--teal);font-weight:600;font-size:.88rem;display:inline-flex;align-items:center;gap:4px;margin-top:10px;">اقرأ المزيد ←</a>
      </div>
    </article>
  <?php endwhile; else: ?>
    <p style="color:var(--muted);text-align:center;padding:60px 0;">لا توجد مقالات.</p>
  <?php endif; ?>
</div>
<?php get_footer('ar'); ?>