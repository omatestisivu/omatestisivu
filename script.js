document.addEventListener('DOMContentLoaded', function () {

    // =========================
    // CTA-kuvan fallback
    // =========================
    const ctaImage = document.querySelector('.cta-image');
    if (ctaImage) {
        ctaImage.addEventListener('error', function () {
            this.src = 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Tuotekuva';
        });
    }

    // =========================
    // CTA-napit
    // =========================
    const btnPrimary = document.querySelector('.btn-primary');
    const btnSecondary = document.querySelector('.btn-secondary');

    if (btnPrimary) {
        btnPrimary.addEventListener('click', () => {
            console.log('Get Started -nappia klikattu');
        });
    }

    if (btnSecondary) {
        btnSecondary.addEventListener('click', () => {
            console.log('Learn More -nappia klikattu');
        });
    }

    // =========================
    // Mobiilivalikko
    // =========================
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (menuBtn && mobileMenu) {

        function toggleMenu(e) {
            e.preventDefault(); // estää tuplatap tai scrollauksen
            menuBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        menuBtn.addEventListener('touchstart', toggleMenu);

        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                mobileMenu.classList.remove('open');
                body.classList.remove('overflow-hidden');
            });
        });

    } else {
        console.warn('Menu elementtejä ei löytynyt (#menu-btn tai #mobile-menu)');
    }

    // =========================
    // Marquee (duplikoi sisältö)
    // =========================
    const marquee = document.getElementById('marquee');
    if (marquee) {
        const content = marquee.innerHTML;
        marquee.innerHTML += content; // duplikoi sisältö
        marquee.style.width = marquee.scrollWidth + "px";
    }

});
