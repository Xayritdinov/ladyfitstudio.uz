const header = document.querySelector('.header');
const burger = document.getElementById("burger");
const navLinks = document.querySelectorAll(".nav-list a");
const logo = document.getElementById("logo");



// ---закрепление меню в верхней части--- //
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#ffffff';
        header.style.opacity = '0.9';
    } else {
        header.style.backgroundColor = '#F3F4F7';
        header.style.opacity = '1';
    }
});


// ---burger-menu---//
document.addEventListener("DOMContentLoaded", function () {
    burger.addEventListener("click", function () {
        header.classList.toggle("open");
        header.style.backgroundColor = '#ffffff';
        header.style.opacity = '0.9';
    });
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            header.classList.remove("open");
        });
    });
});


// ---обновление страницы при нажатии на логотип---//
document.addEventListener("DOMContentLoaded", function () {
    logo.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo(0, 0);
        location.reload();
    });
});


// ---слайдер для галереи---//
let index = 0;
let startX = 0;
let isSwiping = false;
const slider = document.querySelector('.gallery-grid');
const images = document.querySelectorAll('.gallery-grid .gallery-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlider() {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${index * 100}%)`;
}
prevButton.addEventListener('click', () => {
    index--;
    updateSlider();
});
nextButton.addEventListener('click', () => {
    index++;
    updateSlider();
});
// --- Сенсорный свайп --- //
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
}, { passive: true });
slider.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    if (Math.abs(diffX) > 30) {
        if (diffX > 0) {
            index++;
        } else {
            index--;
        }
        updateSlider();
        isSwiping = false;
    }
}, { passive: true });
slider.addEventListener('touchend', () => {
    isSwiping = false;
}, { passive: true });





// для акции
// let promoIndex = 0;

// const promoSlider = document.querySelector('.promotions-list');
// const promoImages = document.querySelectorAll('.promotions-item');
// const prevPromoButton = document.querySelector('.prev');
// const nextPromoButton = document.querySelector('.next');
// function updatePromoSlider() {
//     if (promoIndex < 0) {
//         promoIndex = promoImages.length - 1;
//     } else if (promoIndex >= promoImages.length) {
//         promoIndex = 0;
//     }
//     promoSlider.style.transform = `translateX(-${promoIndex * 100}%)`;
// }
// prevPromoButton.addEventListener('click', () => {
//     promoIndex--;
//     updatePromoSlider();
// });
// nextPromoButton.addEventListener('click', () => {
//     promoIndex++;
//     updatePromoSlider();
// });

// Сенсорный свайп для акций на мобильных устройствах
// let startXa, isSwipinga = false;

// promoSlider.addEventListener('touchstart', (e) => {
//     startXa = e.touches[0].clientX;
//     isSwipinga = true;
// }, { passive: true });

// promoSlider.addEventListener('touchmove', (e) => {
//     if (!isSwiping) return;
//     const currentX = e.touches[0].clientX;
//     const diffX = startXa - currentX;

//     if (Math.abs(diffX) > 30) {
//         if (diffX > 0) {
//             promoIndex++;
//         } else {
//             promoIndex--;
//         }
//         updatePromoSlider();
//         isSwipinga = false;
//     }
// }, { passive: true });

// promoSlider.addEventListener('touchend', () => {
//     isSwipinga = false;
// }, { passive: true });
