const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const burger = document.getElementById("burger");

function toggleMenu(){
    const open = menu.classList.contains("translate-x-0");

    if(!open){
        menu.classList.remove("translate-x-full");
        menu.classList.add("translate-x-0");

        overlay.classList.remove("invisible","opacity-0");
        overlay.classList.add("opacity-100");

        burger.classList.add("menu-open");

        document.body.style.overflow="hidden";
    }else{
        menu.classList.add("translate-x-full");
        menu.classList.remove("translate-x-0");

        overlay.classList.add("invisible","opacity-0");
        overlay.classList.remove("opacity-100");

        burger.classList.remove("menu-open");

        document.body.style.overflow="";
    }
}

overlay.addEventListener("click", toggleMenu);

document.getElementById("current-year").textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-toggle');

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });
});
