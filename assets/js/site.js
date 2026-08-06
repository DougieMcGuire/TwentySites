/* Twenty Sites — the small amount of JavaScript the page genuinely needs. */
(function () {
  'use strict';

  /* Masthead hairline once the page has moved off the top. */
  var masthead = document.querySelector('[data-masthead]');
  if (masthead) {
    var sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;';
    document.body.prepend(sentinel);

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        masthead.classList.toggle('is-stuck', !entries[0].isIntersecting);
      }).observe(sentinel);
    }
  }

  /* Mobile menu. */
  var toggle = document.querySelector('[data-menu-toggle]');
  var drawer = document.querySelector('[data-drawer]');

  function closeDrawer() {
    if (!toggle || !drawer) return;
    toggle.setAttribute('aria-expanded', 'false');
    drawer.hidden = true;
  }

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      drawer.hidden = open;
    });

    drawer.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeDrawer();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeDrawer();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 992) closeDrawer();
    });
  }

  /* Mark the section currently in view in the nav. */
  var links = Array.prototype.slice.call(document.querySelectorAll('.navlist a[href^="#"]'));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var visible = new Set();
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        var current = sections.filter(function (s) { return visible.has(s.id); })[0];
        links.forEach(function (link) {
          link.classList.toggle('is-current', !!current && link.getAttribute('href') === '#' + current.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(function (section) { spy.observe(section); });
  }

  /* One question open at a time, for browsers without <details name>. */
  var accordion = document.querySelector('[data-accordion]');
  var supportsName = 'name' in document.createElement('details');

  if (accordion && !supportsName) {
    var items = Array.prototype.slice.call(accordion.querySelectorAll('details'));
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (other) { if (other !== item) other.open = false; });
      });
    });
  }
})();
