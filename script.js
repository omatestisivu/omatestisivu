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
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;

        menuBtn.addEventListener('click', () => {
            // Animoi hampurilaiskuvake
            menuBtn.classList.toggle('open');
            // Näytä/piilota valikko
            mobileMenu.classList.toggle('open');
            // Estä scrollaus kun valikko on auki
            body.classList.toggle('overflow-hidden');
        });

        // Sulje valikko jos linkkiä klikataan
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                mobileMenu.classList.remove('open');
                body.classList.remove('overflow-hidden');
            });
        });
