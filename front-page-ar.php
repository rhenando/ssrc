<?php get_header('ar'); ?>

<style>
.sec-rule        { width:50px; height:4px; background:linear-gradient(90deg,#008080,#003366); border-radius:2px; margin:0 auto; }
.card-top::after { content:''; position:absolute; top:0; right:0; left:0; height:4px; background:linear-gradient(90deg,#008080,#003366); }
.card-bar::before{ content:''; position:absolute; top:0; right:0; left:0; height:4px; background:linear-gradient(90deg,#003366,#008080); transform:scaleX(0); transition:transform .3s; transform-origin:right; border-radius:4px 4px 0 0; }
.card-bar:hover::before { transform:scaleX(1); }
.hero-card::before { content:''; position:absolute; top:0; right:38px; left:38px; height:3px; background:linear-gradient(90deg,#008080,#003366); border-radius:0 0 4px 4px; }
</style>

<!-- ═══ HERO ═══ -->
<section class="bg-gradient-to-br from-[#e8eef5] via-[#dce7f2] to-[#cfdaec] relative overflow-hidden px-6 md:px-10 py-16 md:py-20">
  <div class="absolute w-[500px] h-[500px] rounded-full border-[55px] border-teal/[.07] -top-32 -left-20 pointer-events-none"></div>
  <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">

    <div class="fade-up">
      <div class="inline-flex items-center gap-2 bg-teal/10 border border-teal/25 text-teal text-[.74rem] font-bold px-4 py-1.5 rounded-full mb-5">
        <span class="w-1.5 h-1.5 bg-teal rounded-full"></span>البحث والتحليلات
      </div>
      <h1 class="font-head text-[clamp(2rem,4vw,3rem)] font-extrabold text-navy leading-[1.15] mb-4">
        قيادة الرؤى من خلال<br>التميز <span class="accent">البحثي</span>
      </h1>
      <p class="text-[1.05rem] text-muted leading-[1.75] mb-8 max-w-[420px]">
        تقديم حلول قائمة على البيانات لاتخاذ قرارات مستنيرة تدفع القطاعات إلى الأمام.
      </p>
      <div class="flex gap-3 flex-wrap">
        <a href="<?php echo esc_url(ssrc_lang_url('/contact')); ?>"
           class="inline-flex items-center gap-2 bg-teal text-white font-semibold text-[.95rem] px-7 py-3.5 rounded-lg border-2 border-teal shadow-[0_4px_18px_rgba(0,128,128,.3)] hover:bg-teal-hover hover:border-teal-hover transition-all hover:-translate-y-0.5">
          ابدأ الآن
          <svg class="arrow-flip" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="<?php echo esc_url(ssrc_lang_url('/about')); ?>"
           class="inline-flex items-center gap-2 bg-transparent text-navy font-semibold text-[.95rem] px-7 py-3 rounded-lg border-2 border-navy hover:bg-navy hover:text-white transition-all hover:-translate-y-0.5">
          اعرف المزيد
        </a>
      </div>
    </div>

    <!-- Data card -->
    <div class="fade-up [transition-delay:.15s] hidden md:block">
      <div class="hero-card relative bg-white/90 border border-white/90 rounded-[22px] p-7 shadow-[0_24px_72px_rgba(0,51,102,.16)] max-w-[380px] mx-auto">
        <div class="flex justify-between items-center mb-4 text-[.74rem] font-semibold text-muted">
          مخرجات البحث <span class="text-teal text-[.9rem] font-bold">↑ 24%</span>
        </div>
        <div class="flex items-end gap-2 h-[115px] mb-3">
          <?php
          $bars = [['b-mid','48px'],['b-navy','74px'],['b-mid','60px'],['b-teal','94px'],['b-navy','78px'],['b-teal','112px']];
          $labels = ['ر1','ر2','ر3','ر4','ر5','ر6'];
          foreach ($bars as $i => $b) :
            $bg = $b[0] === 'b-teal' ? 'bg-teal shadow-[0_-3px_10px_rgba(0,128,128,.35)]' : ($b[0] === 'b-navy' ? 'bg-navy' : 'bg-[#4d7fa8]');
          ?>
            <div class="bar-c flex-1 flex flex-col items-center gap-1">
              <div class="bar-b w-full rounded-t <?php echo $bg; ?>" style="height:<?php echo $b[1]; ?>"></div>
              <span class="text-[.63rem] text-muted"><?php echo $labels[$i]; ?></span>
            </div>
          <?php endforeach; ?>
        </div>
        <div class="grid grid-cols-3 gap-2 pt-3 border-t border-border">
          <?php foreach ([['150','+','دراسة'],['25','+','دولة'],['10','+','سنوات']] as $s) : ?>
            <div class="bg-gray-light rounded-lg py-2 px-1.5 text-center">
              <div class="font-head text-[1.15rem] font-bold text-navy leading-none">
                <?php echo $s[0]; ?><em class="text-teal not-italic text-[.75rem]"><?php echo $s[1]; ?></em>
              </div>
              <div class="text-[.64rem] text-muted mt-1"><?php echo $s[2]; ?></div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ═══ WHO WE ARE ═══ -->
<section class="bg-white px-6 md:px-10 py-16 md:py-20">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-12 fade-up">
      <span class="text-teal text-[.74rem] font-bold">عن SSRC</span>
      <h2 class="font-head text-[clamp(1.7rem,3vw,2.3rem)] font-bold text-navy mt-1 mb-3">من نحن</h2>
      <div class="sec-rule"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div class="who-img-wrap relative fade-up">
        <img class="w-full aspect-[4/3] rounded-2xl object-cover shadow-[0_16px_52px_rgba(0,51,102,.14)] bg-gradient-to-br from-navy to-teal block"
             src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
             alt="فريق SSRC البحثي"
             onerror="this.style.objectFit='none';this.style.padding='60px';">
        <div class="absolute -bottom-5 -left-5 bg-navy text-white rounded-xl px-4 py-3 border-r-4 border-teal shadow-[0_6px_24px_rgba(0,51,102,.2)] min-w-[148px] hidden md:block">
          <div class="font-head text-[1.85rem] font-extrabold leading-none">98<span class="text-teal text-base">%</span></div>
          <div class="text-[.7rem] text-white/60 mt-0.5">رضا العملاء</div>
        </div>
      </div>
      <div class="fade-up">
        <p class="text-base text-muted leading-[1.8] mb-7">حلول استراتيجية للبحث والاستشارات (SSRC) هي شركة بحث واستشارات مقرها دمشق مكرسة لفتح المعرفة والبيانات والرؤى التي تدفع عجلة التقدم واتخاذ القرارات المستنيرة. بخبرة واسعة في بحث الرأي العام، تقوم SSRC بقياس وتحليل وتفسير الاتجاهات الاجتماعية والسياسية والاستهلاكية في سوريا.</p>
        <div class="flex flex-col divide-y divide-border">
          <?php
          $stats = [
            ['أكثر من 10 سنوات خبرة', 'خبرة عميقة', '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>'],
            ['أكثر من 150 دراسة منشورة', 'أبحاث محكّمة', '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'],
            ['قاعدة عملاء عالمية', 'عملاء في أكثر من 25 دولة', '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'],
          ];
          foreach ($stats as $s) : ?>
            <div class="grid grid-cols-[50px_1fr] gap-4 items-center py-4">
              <div class="w-[50px] h-[50px] bg-teal-pale rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?php echo $s[2]; ?></svg>
              </div>
              <div>
                <div class="font-head text-[clamp(1.1rem,2vw,1.4rem)] font-bold text-navy leading-[1.1]"><?php echo $s[0]; ?></div>
                <div class="text-[.74rem] text-muted mt-0.5"><?php echo $s[1]; ?></div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ MISSION & VISION ═══ -->
<section class="bg-gray-light px-6 md:px-10 py-16 md:py-20">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-12 fade-up">
      <span class="text-teal text-[.74rem] font-bold">غايتنا</span>
      <h2 class="font-head text-[clamp(1.7rem,3vw,2.3rem)] font-bold text-navy mt-1 mb-3">الرسالة والرؤية</h2>
      <div class="sec-rule"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <?php
      $mv = [
        ['الرسالة','تحقيق تغيير حقيقي','توليد رؤى موثوقة وقائمة على البيانات تمكّن صناع القرار وتعزز الحوكمة وتدعم التنمية المستدامة في سوريا والمنطقة الأوسع — من خلال تطبيق أساليب بحثية صارمة وأفضل الممارسات الدولية لإنتاج معلومات موثوقة تدعم إعادة الإعمار وتحقق تغييراً حقيقياً.',
         '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>'],
        ['الرؤية','مركز رائد للبحوث الإقليمية','أن نكون المركز الرائد في سوريا للتميز البحثي والابتكار والاستشارات الاستراتيجية — شريك موثوق في إعادة بناء الوطن وفتح الفرص وصياغة مستقبل أكثر استنارة وملاءمة وازدهاراً لجميع السوريين.',
         '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'],
      ];
      foreach ($mv as $m) : ?>
        <div class="card-top relative bg-white border border-border rounded-2xl p-8 md:p-10 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-card fade-up">
          <div class="w-14 h-14 bg-teal-pale rounded-2xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?php echo $m[3]; ?></svg>
          </div>
          <div class="text-teal text-[.74rem] font-bold mb-1.5"><?php echo $m[0]; ?></div>
          <h3 class="font-head text-[clamp(1.05rem,2vw,1.2rem)] font-bold text-navy mb-3"><?php echo $m[1]; ?></h3>
          <p class="text-sm text-muted leading-[1.8]"><?php echo $m[2]; ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══ VALUES ═══ -->
<section class="bg-white px-6 md:px-10 py-16 md:py-20">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-12 fade-up">
      <span class="text-teal text-[.74rem] font-bold">ما يوجهنا</span>
      <h2 class="font-head text-[clamp(1.7rem,3vw,2.3rem)] font-bold text-navy mt-1 mb-3">قيمنا الأساسية</h2>
      <div class="sec-rule"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-11">
      <?php
      $values = [
        ['01','النزاهة',   'نلتزم بأعلى المعايير الأخلاقية لضمان شفافية وموضوعية وموثوقية جميع خدمات البحث والاستشارات.'],
        ['02','التميز',    'تقديم نتائج عالية الجودة ومبنية على الأدلة تلبي المعايير الدولية وتتجاوز توقعات العملاء.'],
        ['03','الابتكار',   'تبني الإبداع والتفكير المستقبلي لتطوير منهجياتنا باستمرار والبقاء في طليعة الاستشارات.'],
        ['04','التعاون',   'تحقيق تأثير هادف من خلال الشراكة — العمل الوثيق مع العملاء وأصحاب المصلحة لخلق الحلول معاً.'],
        ['05','المساءلة',  'تحمل المسؤولية الكاملة عن دقة وموثوقية وتأثير عملنا في كل مشروع.'],
        ['06','التمكين',   'بناء القدرات وتمكين اتخاذ القرارات القائمة على البيانات التي تساهم في النمو المستدام والتغيير الإيجابي.'],
      ];
      foreach ($values as $v) : ?>
        <div class="card-bar relative bg-white border border-border rounded-2xl px-5 py-7 text-center overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-card fade-up">
          <div class="font-head text-[2.2rem] font-extrabold text-teal/[.12] leading-none mb-2.5"><?php echo $v[0]; ?></div>
          <div class="font-head text-[.98rem] font-bold text-navy mb-2"><?php echo $v[1]; ?></div>
          <p class="text-sm text-muted leading-[1.65]"><?php echo $v[2]; ?></p>
        </div>
      <?php endforeach; ?>
    </div>
    <div class="text-center fade-up">
      <a href="<?php echo esc_url(ssrc_lang_url('/about')); ?>"
         class="inline-flex items-center gap-2 bg-teal text-white font-semibold text-[.95rem] px-7 py-3.5 rounded-lg border-2 border-teal shadow-[0_4px_18px_rgba(0,128,128,.3)] hover:bg-teal-hover hover:border-teal-hover transition-all hover:-translate-y-0.5">
        اعرف المزيد عنا
        <svg class="arrow-flip" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ═══ SERVICES ═══ -->
<section class="bg-gray-light px-6 md:px-10 py-16 md:py-20">
  <div class="max-w-[1100px] mx-auto">
    <div class="text-center mb-12 fade-up">
      <span class="text-teal text-[.74rem] font-bold">ما نقوم به</span>
      <h2 class="font-head text-[clamp(1.7rem,3vw,2.3rem)] font-bold text-navy mt-1 mb-3">خدماتنا</h2>
      <div class="sec-rule"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <?php
      $svcs = [
        ['أبحاث السوق','رؤى عميقة للسوق وتحليل شامل لفهم ديناميكيات السوق المتطورة وسلوك المستهلكين وفرص النمو الناشئة.','<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>'],
        ['تحليل البيانات','أطر تحليلية متقدمة وتحديد الاتجاهات لاستخراج رؤى قابلة للتنفيذ من مجموعات البيانات المعقدة للتخطيط الاستراتيجي.','<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'],
        ['دراسات السياسات','تحليل شامل للسياسات ورسم خرائط المشهد التنظيمي وتقارير بحثية للتنقل في بيئات السياسات المعقدة بثقة.','<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'],
      ];
      foreach ($svcs as $s) : ?>
        <div class="card-bar relative bg-white border border-border rounded-2xl px-7 py-9 text-center overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-lg group fade-up">
          <div class="w-[68px] h-[68px] bg-teal-pale rounded-full border-2 border-teal/20 flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-teal group-hover:border-teal">
            <svg class="w-6 h-6 text-teal transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?php echo $s[2]; ?></svg>
          </div>
          <h3 class="font-head text-[1.1rem] font-bold text-navy mb-2.5"><?php echo $s[0]; ?></h3>
          <p class="text-sm text-muted leading-[1.7] mb-4"><?php echo $s[1]; ?></p>
          <a href="<?php echo esc_url(ssrc_lang_url('/services')); ?>"
             class="text-teal text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 hover:text-teal-hover transition-all">
            استكشف الخدمة
            <svg class="arrow-flip" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══ CTA ═══ -->
<section class="relative overflow-hidden px-6 md:px-10 py-20 md:py-24 text-center"
         style="background:linear-gradient(135deg,#003366 0%,#004080 60%,#1a5480 100%)">
  <div class="absolute w-[560px] h-[560px] rounded-full bg-teal/[.08] -top-48 -left-20 pointer-events-none"></div>
  <div class="absolute w-[360px] h-[360px] rounded-full bg-teal/[.06] -bottom-32 -right-14 pointer-events-none"></div>
  <div class="relative z-10 max-w-[660px] mx-auto fade-up">
    <h2 class="font-head text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white leading-[1.25] mb-8">
      شاركنا لتحقيق حلول<br>قائمة على الأدلة
    </h2>
    <a href="<?php echo esc_url(ssrc_lang_url('/contact')); ?>"
       class="inline-flex items-center gap-2 bg-white text-navy font-bold text-[.98rem] px-9 py-3.5 rounded-lg border-2 border-white shadow-[0_4px_18px_rgba(0,0,0,.18)] hover:bg-transparent hover:text-white transition-all hover:-translate-y-0.5">
      تواصل معنا
      <svg class="arrow-flip" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>
</section>

<script>
(function(){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  },{ threshold:0.12 });
  document.querySelectorAll('.fade-up').forEach(function(el){ io.observe(el); });
})();
</script>

<?php get_footer('ar'); ?>
