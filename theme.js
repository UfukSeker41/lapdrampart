// Site-wide light/dark theme toggle, shared across all pages
(function () {
  if (localStorage.getItem('lapd-theme') === 'light') {
    document.documentElement.classList.add('light-theme');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    function sync() {
      const isLight = document.documentElement.classList.contains('light-theme');
      btn.textContent = isLight ? '🌙' : '☀️';
      btn.setAttribute('aria-label', isLight ? 'Koyu temaya geç' : 'Açık temaya geç');
    }

    sync();
    btn.addEventListener('click', function () {
      document.documentElement.classList.toggle('light-theme');
      localStorage.setItem('lapd-theme', document.documentElement.classList.contains('light-theme') ? 'light' : 'dark');
      sync();
    });
  });
})();
