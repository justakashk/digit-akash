
(function() {
  // Set current year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Scroll-to-top
  const toTop = document.getElementById('toTop');
  const onScroll = () => {
    if (!toTop) return;
    if (window.scrollY > 300) toTop.classList.add('show');
    else toTop.classList.remove('show');
    highlightActiveLink();
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Dark mode toggle
  const toggle = document.getElementById('darkToggle');
  const DARK_KEY = 'dak-theme';
  const applyTheme = (mode) => {
    if(mode === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  };
  const saved = localStorage.getItem(DARK_KEY);
  if (saved) applyTheme(saved);
  toggle && toggle.addEventListener('click', () => {
    const newMode = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(newMode);
    localStorage.setItem(DARK_KEY, newMode);
  });

  // Active nav link highlight
  function highlightActiveLink() {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar .nav-link').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (href === path) a.classList.add('active'); else a.classList.remove('active');
    });
  }
  highlightActiveLink();

  // Contact form validation
  const form = document.getElementById('formContact');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
      } else {
        // simulate submit
        alert('Thanks! Your message has been sent.');
        form.reset();
      }
      form.classList.add('was-validated');
    });
  }
})();
