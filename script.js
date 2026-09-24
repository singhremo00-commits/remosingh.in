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
// --- All Songs & Interactive Lyrics Sheet ---
const allSongsList = [
  { id: "01", title: "Raati", listenUrl: "#" },
  { id: "02", title: "Raati 2", listenUrl: "#" },
  { id: "03", title: "Nigshing Owri", listenUrl: "#" },
  { id: "04", title: "T Sara Nai", listenUrl: "#" },
  { id: "05", title: "T Sara Nai 2", listenUrl: "#" },
  { id: "06", title: "Aji Tore Peya", listenUrl: "#" },
  { id: "07", title: "Ahesile", listenUrl: "#" },
  { id: "08", title: "Khalkoruri", listenUrl: "#" },
  { id: "09", title: "Monor Dairy", listenUrl: "#" },
  { id: "10", title: "Monor Yaari", listenUrl: "#" },
  { id: "11", title: "Tor Sale", listenUrl: "#" },
  { id: "12", title: "Nais Durey Durey", listenUrl: "#" },
  { id: "13", title: "Hopon", listenUrl: "#" },
  { id: "14", title: "Ti", listenUrl: "#" },
  { id: "15", title: "Ti 2", listenUrl: "#" },
  { id: "16", title: "Banar Moyango", listenUrl: "#" },
  { id: "17", title: "Thawri Impani Oya", listenUrl: "#" },
  { id: "18", title: "Nigisga Durey", listenUrl: "#" },
  { id: "19", title: "Nai Kuno Bana", listenUrl: "#" },
  { id: "20", title: "Nai Kuno Bana 2", listenUrl: "#" },
  { id: "21", title: "Thaitai Hudda Mor Ti", listenUrl: "#" },
  { id: "22", title: "Morgoi Nagoi Ti", listenUrl: "#" },
  { id: "23", title: "Thaile Ti Kumpey", listenUrl: "#" },
  { id: "24", title: "Asha Nai", listenUrl: "#" },
  { id: "25", title: "Jauriga Nai Beliya", listenUrl: "#" },
  { id: "26", title: "Aaji Dehiya Tore", listenUrl: "#" },
  { id: "27", title: "T Naile", listenUrl: "#" },
  { id: "28", title: "Banar Yaari", listenUrl: "#" },
  { id: "29", title: "Maya Ti", listenUrl: "#" },
  { id: "30", title: "Gussa Na Ho", listenUrl: "#" },
  { id: "31", title: "Monor D", listenUrl: "#" },
  { id: "32", title: "Monor Yari", listenUrl: "#" },
  { id: "33", title: "Mattou Me Kisade", listenUrl: "#" },
  { id: "34", title: "J Tor Shriti", listenUrl: "#" }
];

// Gaane ki lyrics yahan line-by-line store kar sakte hain
const songLyricsMap = {
  "Raati": "Raati nishith jage mor mone,\nKoto kotha aaji torey bujhai...\n\n(Official lyrics written and composed by Remo Singh)",
  "J Tor Shriti": "J tor shriti buke aaji,\nHarai aami nishi raate...\n\n(Official lyrics written and composed by Remo Singh)"
};

const songsContainerEl = document.getElementById("songsList");
if (songsContainerEl) {
  songsContainerEl.innerHTML = allSongsList.map(item => `
    <div class="song-card">
      <div class="song-meta">
        <span class="song-num">${item.id}</span>
        <div class="song-info">
          <h4 class="song-title">${item.title}</h4>
          <div class="song-author">Lyrics: Remo Singh</div>
        </div>
      </div>
      <div class="song-actions">
        <a href="${item.listenUrl}" class="btn-action btn-listen" target="_blank" rel="noopener">Listen Now</a>
        <button class="btn-action btn-lyrics" onclick="showLyricsModal('${item.title}')">Lyrics</button>
      </div>
    </div>
  `).join("");

  const modalBackdrop = document.getElementById("lyricsBackdrop");
  const modalTitle = document.getElementById("lyricsTitle");
  const modalContent = document.getElementById("lyricsContent");
  const modalCloseBtn = document.getElementById("lyricsCloseBtn");

  window.showLyricsModal = function(title) {
    modalTitle.textContent = title;
    modalContent.textContent = songLyricsMap[title] || "Lyrics coming soon...\n\nWritten and composed by Remo Singh.";
    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  window.hideLyricsModal = function() {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", window.hideLyricsModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) window.hideLyricsModal();
    });
  }
     }
