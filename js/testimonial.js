const testimonials = document.querySelectorAll('.testimonial');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.remove('active');
        if (index === currentIndex) {
            testimonial.classList.add('active');
        }
    });
}

arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonials();
});

arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonials();
});
