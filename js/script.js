const header = document.querySelector('.header');
const burger = document.getElementById("burger");
const navLinks = document.querySelectorAll(".nav-list a");
const logo = document.getElementById("logo");



// ---header закрепление сверху--- //
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
document.addEventListener("DOMContentLoaded", function() {
    // Открытие/закрытие меню по кнопке
    burger.addEventListener("click", function() {
        header.classList.toggle("open");
        header.style.backgroundColor = '#ffffff';
        header.style.opacity = '0.9';
    });

    // Закрытие меню при клике на пункт
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            header.classList.remove("open"); // Закрываем меню
        });
    });
});

// ---обновление страницы---//
document.addEventListener("DOMContentLoaded", function() {
    logo.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем стандартный переход по ссылке
        window.scrollTo(0, 0); 
        // Прокручиваем страницу наверх
        location.reload(); // Обновляем страницу
    });
});

// ---слайдер для галереи---//
let index = 0;
let startX = 0;  // Начальная позиция свайпа
let isSwiping = false;

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
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
// Обработчик события начала свайпа
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
}, { passive: true });

// Обработчик события движения пальца
slider.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    // Если движение пальца больше определенного порога, можно переключить слайд
    if (Math.abs(diffX) > 30) {  // Порог для определения свайпа
        if (diffX > 0) {
            // Свайп влево (переключение на следующую картинку)
            index++;
        } else {
            // Свайп вправо (переключение на предыдущую картинку)
            index--;
        }
        updateSlider();
        isSwiping = false;  // Завершаем свайп
    }
}, { passive: true });

// Обработчик события окончания свайпа
slider.addEventListener('touchend', () => {
    isSwiping = false;
}, { passive: true });





// для акции
let promoIndex = 0;

const promoSlider = document.querySelector('.promotions-list');
const promoImages = document.querySelectorAll('.promotions-item');
const prevPromoButton = document.querySelector('.prev');
const nextPromoButton = document.querySelector('.next');

// Для ПК и мобильников: обновляем слайдер
function updatePromoSlider() {
    if (promoIndex < 0) {
        promoIndex = promoImages.length - 1;
    } else if (promoIndex >= promoImages.length) {
        promoIndex = 0;
    }
    promoSlider.style.transform = `translateX(-${promoIndex * 100}%)`;
}

prevPromoButton.addEventListener('click', () => {
    promoIndex--;
    updatePromoSlider();
});

nextPromoButton.addEventListener('click', () => {
    promoIndex++;
    updatePromoSlider();
});

// Сенсорный свайп для акций на мобильных устройствах
let startXa, isSwipinga = false;

promoSlider.addEventListener('touchstart', (e) => {
    startXa = e.touches[0].clientX;
    isSwipinga = true;
}, { passive: true });

promoSlider.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diffX = startXa - currentX;

    if (Math.abs(diffX) > 30) {
        if (diffX > 0) {
            promoIndex++; // Свайп влево
        } else {
            promoIndex--; // Свайп вправо
        }
        updatePromoSlider();
        isSwipinga = false;
    }
}, { passive: true });

promoSlider.addEventListener('touchend', () => {
    isSwipinga = false;
}, { passive: true });
