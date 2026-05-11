// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Slider functionality for menu items (active on tablet and desktop)
const pizzaContainer = document.querySelector('.menu-items');
const pizzas = document.querySelectorAll('.menu-item');
let pizzaIndex = 0;

function updatePizzaSlider() {
    if (window.innerWidth > 768) {
        const pizzaWidth = pizzas[0].offsetWidth + 20; // 20px gap between items
        pizzaContainer.style.transform = `translateX(-${pizzaIndex * pizzaWidth}px)`;
    } else {
        pizzaContainer.style.transform = 'none';
        pizzaIndex = 0;
    }
}

function getVisiblePizzas() {
    if (window.innerWidth >= 1400) {
        return 4;
    } else if (window.innerWidth >= 1024) {
        return 3;
    } else if (window.innerWidth >= 768) {
        return 2;
    } else {
        return 1;
    }
}

const pizzaNextBtn = document.getElementById('pizzaNext');
const pizzaPrevBtn = document.getElementById('pizzaPrev');

if (pizzaNextBtn && pizzaPrevBtn) {
    pizzaNextBtn.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            const totalPizzas = pizzas.length;
            const visiblePizzas = getVisiblePizzas();
            if (pizzaIndex < totalPizzas - visiblePizzas) {
                pizzaIndex++;
                updatePizzaSlider();
            }
        }
    });

    pizzaPrevBtn.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            if (pizzaIndex > 0) {
                pizzaIndex--;
                updatePizzaSlider();
            }
        }
    });
}

// Slider functionality for testimonials (active on tablet and desktop)
const container = document.querySelector('.testimonials');
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function updateTestimonialSlider() {
    if (window.innerWidth > 768) {
        const cardWidth = cards[0].offsetWidth + (window.innerWidth > 1200 ? 10 : 15);
        container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else {
        container.style.transform = 'none';
        currentIndex = 0;
    }
}

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            const totalCards = cards.length;
            const visibleCards = window.innerWidth > 1200 ? 4 : 3;
            if (currentIndex < totalCards - visibleCards) {
                currentIndex++;
                updateTestimonialSlider();
            }
        }
    });

    prevBtn.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            if (currentIndex > 0) {
                currentIndex--;
                updateTestimonialSlider();
            }
        }
    });
}

// Reset sliders on window resize
window.addEventListener('resize', () => {
    updatePizzaSlider();
    updateTestimonialSlider();
    
    // Close mobile menu if window is resized above mobile breakpoint
    if (window.innerWidth > 768 && hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

