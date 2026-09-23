/* ====================================================================
   REMO SINGH - SHARED LIGHTWEIGHT ACCESSIBILITY & DROPDOWN SCRIPT
   ==================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.getElementById('menuTrigger');
  const menuClose = document.getElementById('menuClose');
  const menuOverlay = document.getElementById('menuOverlay');
  const musicDropdownBtn = document.getElementById('musicDropdownBtn');
  const musicSubMenu = document.getElementById('musicSubMenu');

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

  // Music Dropdown Toggle in Hamburger Menu
  if (musicDropdownBtn && musicSubMenu) {
    musicDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = musicDropdownBtn.getAttribute('aria-expanded') === 'true';
      musicDropdownBtn.setAttribute('aria-expanded', !isExpanded);
      musicSubMenu.classList.toggle('is-open');
    });
  }

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
