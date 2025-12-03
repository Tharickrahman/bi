// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Close menu when clicking on a nav link (mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Don't close if it's a dropdown parent
                if (!link.parentElement.classList.contains('dropdown')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
}

// Mobile Dropdown Toggle
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('.nav-link');
    
    // Mobile: Toggle dropdown on click
    if (dropdownLink) {
        dropdownLink.addEventListener('click', (e) => {
            // Check if we're on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle current dropdown
                const isActive = dropdown.classList.contains('active');
                
                // Close all dropdowns first
                dropdowns.forEach(otherDropdown => {
                    otherDropdown.classList.remove('active');
                });
                
                // Open current dropdown if it wasn't active
                if (!isActive) {
                    dropdown.classList.add('active');
                }
            }
        });
    }
    
    // Close dropdown when clicking on dropdown items (mobile)
    const dropdownItems = dropdown.querySelectorAll('.dropdown-menu a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Small delay to allow navigation
                setTimeout(() => {
                    dropdown.classList.remove('active');
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                    if (hamburger) {
                        hamburger.classList.remove('active');
                    }
                }, 100);
            }
        });
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Reset mobile menu state on desktop
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        // Reset dropdown states
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Show success message
        alert('Thank you for contacting Stackly Bank! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Sign In Form Submission
const signinForm = document.getElementById('signinForm');
if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (username && password) {
            // In a real application, this would send data to a server
            alert('Sign in functionality would connect to authentication service.\n\nUsername: ' + username);
        }
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate cards and sections
    const animatedElements = document.querySelectorAll(
        '.feature-card, .service-card, .content-card, .value-item, .team-member, ' +
        '.service-item, .testimonial-card, .info-card, .award-item, .partner-item, ' +
        '.stat-card, .summary-card, .action-btn'
    );
    
    animatedElements.forEach((el, index) => {
        if (!el.classList.contains('animate-fade-in') && !el.classList.contains('animate-slide-up')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        }
    });

    // Animate page headers
    const pageHeaders = document.querySelectorAll('.page-header, .hero');
    pageHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .nav-link, .feature-link');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Dropdown Menu Enhancement
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
        }
    });
});

// Form Input Enhancements
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

console.log('Stackly Bank website loaded successfully!');

