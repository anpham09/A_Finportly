const testimonials = document.querySelectorAll('.testimonial');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

// Hiển thị testimonial hiện tại
function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.remove('active');
        if (index === currentIndex) {
            testimonial.classList.add('active');
        }
    });
}

// Khi nhấn mũi tên trái
arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonials();
});

// Khi nhấn mũi tên phải
arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonials();
});
