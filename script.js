// Hamburger Menu Toggle
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showFormMessage('Message sent successfully! Thank you for reaching out.', 'success');
    
    // Reset form
    this.reset();
    
    // Log form data (in real application, this would be sent to a server)
    console.log('Form Data:', {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString()
    });
});

// Display Form Message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// Scroll Animation for Skill Bars
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                const width = skillProgress.style.width;
                skillProgress.style.width = '0';
                setTimeout(() => {
                    skillProgress.style.width = width;
                }, 100);
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill items
document.querySelectorAll('.skill-item').forEach(skill => {
    observer.observe(skill);
});

// Mobile Menu Close on Link Click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});

// Dynamic Year in Footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = `© ${currentYear} Jishnu. All rights reserved.`;
    }
});

// Theme Toggle (Light/Dark Mode)
function initThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark-mode');
    }
}

// Initialize theme on load
initThemeToggle();

// Project Card Click Handler
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        console.log('Project clicked:', this.querySelector('h3').textContent);
        // Add interactive feedback
        this.classList.add('active');
        setTimeout(() => {
            this.classList.remove('active');
        }, 300);
    });
});

// Log page analytics
console.log('Portfolio website loaded at:', new Date().toISOString());
console.log('User agent:', navigator.userAgent);