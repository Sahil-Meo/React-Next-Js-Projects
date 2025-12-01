// Get elements
const wrapper = document.querySelector('.wrapepr');
const leftButton = document.querySelector('.scroll-btn.left');
const rightButton = document.querySelector('.scroll-btn.right');
const distance = wrapper.offsetWidth;
// Scroll Left
leftButton.addEventListener('click', () => {

    wrapper.scrollBy({
        left: - distance , // Adjust scroll distance
        behavior: 'smooth',
    });
});

// Scroll Right
rightButton.addEventListener('click', () => {
    wrapper.scrollBy({
        left: + distance , // Adjust scroll distance
        behavior: 'smooth',
    });
});
