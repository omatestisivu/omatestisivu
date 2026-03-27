window.addEventListener('load', () => {
    const marquee = document.getElementById('marquee');
    if (!marquee) return;

    marquee.innerHTML += marquee.innerHTML;

    marquee.style.whiteSpace = 'nowrap';
    marquee.style.display = 'inline-block';
    marquee.style.overflow = 'hidden';
    marquee.style.willChange = 'transform';

    const parent = marquee.parentElement;
    if (parent) {
        parent.style.overflow = 'hidden';
        parent.style.whiteSpace = 'nowrap';
    }

    let pos = 0;
    const speed = 1; 

    function tick() {
        pos -= speed;

        if (Math.abs(pos) >= marquee.scrollWidth / 2) {
            pos = 0;
        }

        marquee.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(tick);
    }

    tick();
});

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
