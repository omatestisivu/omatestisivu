const marquee = document.querySelector('.tech-marquee-content');
let scrollAmount = 0;

function animateMarquee() {
    scrollAmount -= 1;
    if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
        scrollAmount = 0;
    }
    marquee.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(animateMarquee);
}

if (marquee) {
    animateMarquee();
}

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

// Toggle menu
menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');

    menuIcon.classList.toggle('hidden', isOpen);
    closeIcon.classList.toggle('hidden', !isOpen);

    menuBtn.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
});

// Sulje menu klikkaamalla linkkiä
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        menuBtn.setAttribute('aria-expanded', false);
    });
});

// Sulje menu klikkaamalla muualle
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        menuBtn.setAttribute('aria-expanded', false);
    }
});

// Palauta desktop-näkymä resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        menuBtn.setAttribute('aria-expanded', false);
    }
});
