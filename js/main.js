// Helena's Specialty Pierogies — small enhancements (site works without JS)
(function () {
  // Mobile navigation
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
      if (open) { var first = nav.querySelector('a'); if (first) first.focus(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Menu search + category filters
  var search = document.getElementById('menu-search');
  if (!search) return;
  var clearBtn = document.getElementById('search-clear');
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var cats = Array.prototype.slice.call(document.querySelectorAll('.menu-cat'));
  var empty = document.getElementById('no-results');
  var status = document.getElementById('menu-status');
  var filter = 'all';
  var norm = function (s) { s = s.normalize('NFD'); var out = ''; for (var i = 0; i < s.length; i++) { var c = s.charCodeAt(i); if (c < 768 || c > 879) out += s[i]; } return out.replace(/['’]/g, '').toLowerCase(); };
  document.querySelectorAll('.item').forEach(function (item) { item.dataset.name = norm(item.textContent); });

  function update() {
    var q = norm(search.value.trim());
    var total = 0;
    cats.forEach(function (cat) {
      var showCat = filter === 'all' || cat.dataset.cat === filter;
      var shown = 0;
      cat.querySelectorAll('.item').forEach(function (item) {
        var match = showCat && (!q || item.dataset.name.indexOf(q) !== -1);
        item.hidden = !match;
        if (match) shown++;
      });
      cat.hidden = shown === 0;
      total += shown;
    });
    empty.hidden = total !== 0;
    clearBtn.hidden = !search.value;
    status.textContent = total + (total === 1 ? ' item shown' : ' items shown');
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      filter = chip.dataset.filter;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
      update();
    });
  });
  search.addEventListener('input', update);
  clearBtn.addEventListener('click', function () { search.value = ''; update(); search.focus(); });
})();
