</main>
  </div><!-- #content -->

  <!-- ═══ FOOTER ═══ -->
  <footer id="colophon" class="bg-navy-dark border-t-[3px] border-teal font-body">

    <div class="max-w-[1200px] mx-auto px-6 md:px-10 pt-14 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

      <!-- Col 1 — About -->
      <div>
        <?php if ( is_active_sidebar('footer-1') ) :
          dynamic_sidebar('footer-1');
        else : ?>
          <span class="block text-white text-[.78rem] font-bold pb-2.5 mb-4 border-b-2 border-teal w-fit">
            عن الشركة
          </span>
          <ul class="flex flex-col gap-2">
            <?php foreach (['رسالتنا'=>'/about','فريقنا'=>'/about','تاريخنا'=>'/about','الوظائف'=>'/careers'] as $label => $path) : ?>
              <li>
                <a href="<?php echo esc_url(ssrc_lang_url($path)); ?>"
                   class="text-white/55 text-sm block py-0.5 hover:text-white/90 hover:pr-1.5 transition-all duration-150">
                  <?php echo esc_html($label); ?>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        <?php endif; ?>
      </div>

      <!-- Col 2 — Quick Links -->
      <div>
        <?php if ( is_active_sidebar('footer-2') ) :
          dynamic_sidebar('footer-2');
        else : ?>
          <span class="block text-white text-[.78rem] font-bold pb-2.5 mb-4 border-b-2 border-teal w-fit">
            روابط سريعة
          </span>
          <ul class="flex flex-col gap-2">
            <?php foreach (['الرئيسية'=>'/','عن الشركة'=>'/about','الخدمات'=>'/services','التحميلات'=>'/downloads'] as $label => $path) : ?>
              <li>
                <a href="<?php echo esc_url(ssrc_lang_url($path)); ?>"
                   class="text-white/55 text-sm block py-0.5 hover:text-white/90 hover:pr-1.5 transition-all duration-150">
                  <?php echo esc_html($label); ?>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        <?php endif; ?>
      </div>

      <!-- Col 3 — Services -->
      <div>
        <?php if ( is_active_sidebar('footer-3') ) :
          dynamic_sidebar('footer-3');
        else : ?>
          <span class="block text-white text-[.78rem] font-bold pb-2.5 mb-4 border-b-2 border-teal w-fit">
            خدماتنا
          </span>
          <ul class="flex flex-col gap-2">
            <?php foreach (['أبحاث السوق','تحليل البيانات','دراسات السياسات'] as $label) : ?>
              <li>
                <a href="<?php echo esc_url(ssrc_lang_url('/services')); ?>"
                   class="text-white/55 text-sm block py-0.5 hover:text-white/90 hover:pr-1.5 transition-all duration-150">
                  <?php echo esc_html($label); ?>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        <?php endif; ?>
      </div>

      <!-- Col 4 — Contact -->
      <div>
        <?php if ( is_active_sidebar('footer-4') ) :
          dynamic_sidebar('footer-4');
        else :
          $emails = ['general@ssrc.online','engineering@ssrc.online'];
          $phones = ['+1 949 287 3927','+963 968 268 933','+49 178 4522794'];
        ?>
          <span class="block text-white text-[.78rem] font-bold pb-2.5 mb-4 border-b-2 border-teal w-fit">
            تواصل معنا
          </span>

          <?php foreach ($emails as $email) : ?>
          <div class="flex items-start gap-2.5 mb-3">
            <div class="w-7 h-7 bg-teal/20 rounded-md flex-shrink-0 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <a href="mailto:<?php echo esc_attr($email); ?>"
               class="text-white/55 text-sm leading-[1.5] hover:text-teal transition-colors">
              <?php echo esc_html($email); ?>
            </a>
          </div>
          <?php endforeach; ?>

          <?php foreach ($phones as $phone) : ?>
          <div class="flex items-start gap-2.5 mb-3">
            <div class="w-7 h-7 bg-teal/20 rounded-md flex-shrink-0 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 5.55 5.55l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.92z"/></svg>
            </div>
            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/','', $phone)); ?>"
               class="text-white/55 text-sm leading-[1.5] hover:text-teal transition-colors">
              <?php echo esc_html($phone); ?>
            </a>
          </div>
          <?php endforeach; ?>

        <?php endif; ?>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="max-w-[1200px] mx-auto px-6 md:px-10 py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">

      <div class="flex gap-2">
        <?php foreach ([['فيسبوك','f'],['تويتر','𝕏'],['لينكدإن','in']] as $s) : ?>
          <a href="#" aria-label="<?php echo esc_attr($s[0]); ?>"
             class="w-10 h-10 rounded-lg bg-white/[.08] border border-white/[.12] text-white/55 text-[.78rem] font-bold flex items-center justify-center hover:bg-teal hover:border-teal hover:text-white hover:-translate-y-0.5 transition-all duration-200">
            <?php echo $s[1]; ?>
          </a>
        <?php endforeach; ?>
      </div>

      <p class="text-[.8rem] text-white/35">
        <?php echo wp_kses_post(get_theme_mod('ssrc_copyright','&copy; ' . date('Y') . ' SSRC. جميع الحقوق محفوظة.')); ?>
      </p>

    </div>

  </footer>

</div><!-- #page -->
<?php wp_footer(); ?>
</body>
</html>
