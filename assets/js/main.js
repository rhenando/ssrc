(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('[data-mobile-nav]');
  if (!btn || !nav) return;

  function open() {
    nav.classList.remove('hidden');
    nav.classList.add('flex');
    btn.setAttribute('aria-expanded', 'true');
  }

  function close() {
    nav.classList.remove('flex');
    nav.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function () {
    nav.classList.contains('flex') ? close() : open();
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !nav.contains(e.target)) close();
  });
}());
