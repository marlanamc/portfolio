// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    }

    lastScroll = currentScroll;
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards for animation
const animatedElements = document.querySelectorAll(
    '.about-content, .project-card, .skill-category, .contact-content, .hero-content'
);

animatedElements.forEach(el => observer.observe(el));

// Active nav link highlighting on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Optional: Uncomment to enable typing effect on hero title
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 30);
// }

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    const emailSpan = document.getElementById('email-text');
    const emailLink = document.getElementById('email-link');
    const emailCta = document.getElementById('email-cta');

    if (emailSpan && (emailLink || emailCta)) {
        const user = emailSpan.dataset.user;
        const domain = emailSpan.dataset.domain;
        const addr = `${user}@${domain}`;

        emailSpan.textContent = addr;

        if (emailLink) {
            emailLink.href = `mailto:${addr}`;
        }

        if (emailCta) {
            emailCta.href = `mailto:${addr}`;
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(highlightNavLink, 10));

// Parallax effect removed for stability

// Pause animations during scrolling for better performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        document.body.classList.add('is-scrolling');
    }
    
    clearTimeout(window.scrollTimer);
    window.scrollTimer = setTimeout(() => {
        isScrolling = false;
        document.body.classList.remove('is-scrolling');
    }, 150);
});

// Project filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category.includes(filterValue)) {
                    // Show card
                    card.classList.remove('filtering');
                    setTimeout(() => {
                        card.classList.remove('hidden');
                    }, 10);
                } else {
                    // Hide card
                    card.classList.add('filtering');
                    setTimeout(() => {
                        card.classList.add('hidden');
                        card.classList.remove('filtering');
                    }, 400);
                }
            });
        });
    });
});

// Screenshot Modal Functions
function openModal(imageSrc, imageAlt) {
    const modal = document.getElementById('screenshot-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modalCaption.textContent = imageAlt;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Add escape key listener
    document.addEventListener('keydown', handleEscapeKey);
}

function closeModal() {
    const modal = document.getElementById('screenshot-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    
    // Remove escape key listener
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

// Console message for potential employers viewing source code
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cI see you\'re checking out the code. I like your style!', 'font-size: 14px; color: #475569;');
console.log('%cFeel free to reach out if you\'d like to chat about opportunities.', 'font-size: 14px; color: #475569;');

// ===== Sparkle Features =====

// Scroll progress bar
const scrollProgress = document.getElementById('scroll-progress');
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (window.scrollY / scrollTotal) * 100;
        scrollProgress.style.width = scrollPercentage + '%';
    });
}

// Section visibility detection for animations
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});


// Number counter animation
function animateNumber(element, target, duration = 2000) {
    if (!element) return;
    
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target) + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Trigger number animations when in view
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const numbers = entry.target.querySelectorAll('.stat-number');
            numbers.forEach(num => {
                if (num.dataset.animated) return;
                
                // Store original text first
                const originalText = num.textContent;
                const targetNum = parseInt(originalText);
                
                if (!isNaN(targetNum)) {
                    num.dataset.animated = 'true';
                    // Reset for animation
                    num.textContent = '0+';
                    setTimeout(() => {
                        animateNumber(num, targetNum);
                    }, 100);
                }
            });
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-content, .about-content').forEach(el => {
    numberObserver.observe(el);
});

// Enhance particle positioning
document.addEventListener('DOMContentLoaded', () => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // Randomize animation duration
        const duration = 15 + Math.random() * 15;
        particle.style.animationDuration = duration + 's';
        
        // Randomize starting position
        const startTop = Math.random() * 100;
        particle.style.top = startTop + '%';
        
        // Add slight delays for staggered effect
        particle.style.animationDelay = (index * 2) + 's';
    });
});

// Magic hover effect for buttons
document.querySelectorAll('.magic-hover').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

