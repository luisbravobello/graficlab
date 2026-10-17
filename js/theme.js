(() => {
  const key = 'graficlab-theme-v1';
  let theme = 'dark';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch {}

  let button;
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    document.dispatchEvent(new Event('graficlab:theme'));
    if (button) {
      const dark = theme === 'dark';
      button.innerHTML = `<span aria-hidden="true">${dark ? '☀' : '☾'}</span> ${dark ? 'Modo claro' : 'Modo negro'}`;
      button.setAttribute('aria-label', `Cambiar a modo ${dark ? 'claro' : 'negro'}`);
    }
  };
  apply();

  document.addEventListener('DOMContentLoaded', () => {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.id = 'theme-toggle';
    button.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      apply();
      try { localStorage.setItem(key, theme); } catch {}
    });
    document.querySelector('.top').append(button);
    apply();
  });
  window.addEventListener('storage', event => {
    if (event.key === key) {
      theme = event.newValue === 'light' ? 'light' : 'dark';
      apply();
    }
  });
})();
