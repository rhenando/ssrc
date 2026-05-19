<?php get_header('ar'); ?>

<style>
.downloads-rule { width:50px; height:4px; background:linear-gradient(90deg,#008080,#003366); border-radius:2px; margin:0 auto; }
.download-card::before { content:''; position:absolute; top:0; right:0; left:0; height:4px; background:linear-gradient(90deg,#003366,#008080); transform:scaleX(0); transition:transform .3s; transform-origin:right; border-radius:4px 4px 0 0; }
.download-card:hover::before { transform:scaleX(1); }
</style>

<section class="bg-gray-light px-6 md:px-10 py-16 md:py-20">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-12">
      <span class="text-teal text-[.74rem] font-bold">التحميلات</span>
      <h1 class="font-head text-[clamp(2rem,4vw,3rem)] font-extrabold text-navy mt-2 mb-4">مركز التحميل</h1>
      <div class="downloads-rule"></div>
      <p class="text-sm md:text-base text-muted leading-[1.75] max-w-[620px] mx-auto mt-5">
        يمكنك الوصول إلى مواد مشروع SSRC والملفات التعريفية والموارد القابلة للتحميل في مكان واحد.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[840px] mx-auto">
      <?php foreach ( ssrc_get_downloads() as $download ) :
        $download_url = get_template_directory_uri() . '/assets/docs/' . $download['file'];
      ?>
        <article class="download-card relative bg-white border border-border rounded-2xl px-7 py-8 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-card">
          <div class="w-14 h-14 bg-teal-pale rounded-2xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?php echo $download['icon']; ?></svg>
          </div>
          <h2 class="font-head text-[1.15rem] font-bold text-navy mb-2"><?php echo esc_html( $download['file'] ); ?></h2>
          <p class="text-sm text-muted leading-[1.7] mb-6"><?php echo esc_html( $download['description_ar'] ); ?></p>
          <a href="<?php echo esc_url( $download_url ); ?>"
             download
             class="inline-flex items-center justify-center gap-2 bg-teal text-white font-semibold text-[.92rem] px-5 py-3 rounded-lg border-2 border-teal shadow-[0_4px_18px_rgba(0,128,128,.22)] hover:bg-teal-hover hover:border-teal-hover transition-all hover:-translate-y-0.5">
            <?php echo esc_html( $download['file'] ); ?>
            <svg class="arrow-flip" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
          </a>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php get_footer('ar'); ?>
