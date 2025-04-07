function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Слайдер для отзывов
const slider = document.querySelector('.reviews-slider');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

function scrollSlider(direction) {
    const items = slider.querySelectorAll('.review-item');
    const currentScroll = slider.scrollLeft;
    let targetScroll = currentScroll;

    if (direction === -1) {
        // Прокрутка влево
        for (let i = items.length - 1; i >= 0; i--) {
            const itemLeft = items[i].offsetLeft;
            if (itemLeft < currentScroll) {
                targetScroll = itemLeft;
                break;
            }
        }
    } else {
        // Прокрутка вправо
        for (let i = 0; i < items.length; i++) {
            const itemLeft = items[i].offsetLeft;
            if (itemLeft > currentScroll) {
                targetScroll = itemLeft;
                break;
            }
        }
    }

    slider.scrollLeft = targetScroll;
}

prevButton.addEventListener('click', () => {
    scrollSlider(-1); // Прокрутка влево
});

nextButton.addEventListener('click', () => {
    scrollSlider(1); // Прокрутка вправо
});

// Автоматическое переключение (опционально)
setInterval(() => {
    const items = slider.querySelectorAll('.review-item');
    const currentScroll = slider.scrollLeft;
    let nextScroll = currentScroll;

    for (let i = 0; i < items.length; i++) {
        const itemLeft = items[i].offsetLeft;
        if (itemLeft > currentScroll) {
            nextScroll = itemLeft;
            break;
        }
        if (i === items.length - 1) {
            nextScroll = 0; // Возвращаемся в начало
        }
    }
    slider.scrollLeft = nextScroll;
}, 5000); // Переключение каждые 5 секунд