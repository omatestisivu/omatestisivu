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

menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');

    menuIcon.classList.toggle('hidden', isOpen);
    closeIcon.classList.toggle('hidden', !isOpen);
});

const toggleBtn = document.getElementById('toggle-device');
let isMobile = false;

toggleBtn.addEventListener('click', () => {
    isMobile = !isMobile;

    if (isMobile) {
        document.body.classList.add('mobile-view');
        toggleBtn.innerText = "Palaa desktopiin";
        toggleBtn.classList.remove('bg-blue-600');
        toggleBtn.classList.add('bg-gray-800');
    } else {
        document.body.classList.remove('mobile-view');
        toggleBtn.innerText = "Testaa puhelinnäkymää";
        toggleBtn.classList.add('bg-blue-600');
        toggleBtn.classList.remove('bg-gray-800');

        navMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }

    menuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');

    menuBtn.setAttribute('aria-expanded', isOpen);

    menuIcon.classList.toggle('hidden', isOpen);
    closeIcon.classList.toggle('hidden', !isOpen);

        document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', false);
    }

            document.body.classList.toggle('no-scroll', isOpen);
});
