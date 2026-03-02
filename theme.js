// ── AttendGuard Theme Manager ──
// Include this in every page

(function() {
  const saved = localStorage.getItem('ag-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const icon = document.getElementById('themeIcon');

  const apply = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ag-theme', theme);
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  };

  apply(localStorage.getItem('ag-theme') || 'dark');

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    apply(current === 'dark' ? 'light' : 'dark');
  });
}

function showToast(msg, type = 'default') {
  let toast = document.getElementById('ag-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ag-toast';
    toast.className = 'ag-toast';
    document.body.appendChild(toast);
  }
  const icons = { default: 'ℹ️', success: '✅', error: '❌', warning: '⚠️' };
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${msg}</span>`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}
