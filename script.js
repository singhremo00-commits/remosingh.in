/* ====================================================================
   REMO SINGH - SHARED LIGHTWEIGHT ACCESSIBILITY & NAVIGATION SCRIPT
   ==================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.getElementById('menuTrigger');
  const menuClose = document.getElementById('menuClose');
  const menuOverlay = document.getElementById('menuOverlay');

  if (!menuTrigger || !menuClose || !menuOverlay) return;

  function openMenu() {
    menuOverlay.classList.add('is-active');
    document.body.classList.add('menu-open');
    menuTrigger.setAttribute('aria-expanded', 'true');
    menuClose.focus();
  }

  function closeMenu() {
    menuOverlay.classList.remove('is-active');
    document.body.classList.remove('menu-open');
    menuTrigger.setAttribute('aria-expanded', 'false');
    menuTrigger.focus();
  }

  menuTrigger.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('is-active')) {
      closeMenu();
    }
  });

  // Close when clicking outside link area
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      closeMenu();
    }
  });
});

