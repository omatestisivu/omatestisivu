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

const heroTitle = document.querySelector('.hero-title');
window.addEventListener('load', () => {
    if (heroTitle) {
        heroTitle.style.opacity = '1';
        console.log('Main section ladattu.');
    }

    lucide.createIcons();

    const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-center");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
