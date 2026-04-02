document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // Mobiilivalikko
  // =========================
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  if (!menuBtn || !mobileMenu) {
    console.warn('Menu elementtejä ei löytynyt (#menu-btn tai #mobile-menu)');
  } else {
    let touchHandled = false;

    function toggleMenu(e) {
      e.preventDefault();
      menuBtn.classList.toggle('open');
      mobileMenu.classList.toggle('translate-x-full');
      mobileMenu.classList.toggle('translate-x-0');
      body.classList.toggle('overflow-hidden');
    }

    menuBtn.addEventListener('touchstart', (e) => {
      touchHandled = true;
      toggleMenu(e);
    });

    menuBtn.addEventListener('click', (e) => {
      if (!touchHandled) toggleMenu(e);
      touchHandled = false;
    });

    // Sulje menu, kun linkkiä tai nappia klikataan
    const navLinks = mobileMenu.querySelectorAll('a, button');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        body.classList.remove('overflow-hidden');
      });
    });
  }

  // =========================
  // Marquee
  // =========================
  const marquee = document.getElementById('marquee');
  if (marquee) {
    const content = marquee.innerHTML;
    marquee.innerHTML += content; // duplikoi sisältö
    marquee.style.width = marquee.scrollWidth + "px";
  }

});
