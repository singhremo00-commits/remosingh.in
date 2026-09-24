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
// --- Lyrics Modal & Bottom Sheet Handler ---
window.showLyricsModal = function(title) {
  const backdrop = document.getElementById("lyricsBackdrop");
  const lyricsTitle = document.getElementById("lyricsTitle");
  const lyricsContent = document.getElementById("lyricsContent");

  if (!backdrop || !lyricsTitle || !lyricsContent) return;

  lyricsTitle.textContent = title;
  const foundLyrics = (typeof songLyricsMap !== 'undefined' && songLyricsMap[title]) ? songLyricsMap[title] : null;
  lyricsContent.textContent = foundLyrics || "Lyrics coming soon...\n\nWritten and composed by Remo Singh.";

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.hideLyricsModal = function() {
  const backdrop = document.getElementById("lyricsBackdrop");
  if (backdrop) {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const backdrop = document.getElementById("lyricsBackdrop");
  const closeBtn = document.getElementById("lyricsCloseBtn");

  if (closeBtn) {
    closeBtn.addEventListener("click", window.hideLyricsModal);
  }
  if (backdrop) {
    backdrop.addEventListener("click", function(e) {
      if (e.target === backdrop) window.hideLyricsModal();
    });
  }
});
