// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Update scroll behavior for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 30, 30, 0.98)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(30, 30, 30, 0.95)';
        navbar.style.padding = '1rem 0';
    }
});

// CV Download functionality
const cvDownloadBtn = document.querySelector('.btn-primary');
if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener('click', function(e) {
        // This will trigger the download of CV.pdf
        // In a real implementation, you would have your actual CV file
        console.log('CV Download initiated');
    });
}

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements that should animate when scrolled into view
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .skill-category');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Handle image loading errors
    const profileImg = document.querySelector('.profile-img');
    const logoImg = document.querySelector('.logo-img');
    
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/300x300/1e1e1e/8a2be2?text=YOUR+PHOTO';
            this.alt = 'Profile Photo';
        });
    }
    
    if (logoImg) {
        logoImg.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/100x100/1e1e1e/00c896?text=LOGO';
            this.alt = 'Personal Logo';
        });
    }
    
    // Add error handling for project images
    const projectImgs = document.querySelectorAll('.project-image img');
    projectImgs.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x200/1e1e1e/b3b3b3?text=PROJECT+IMAGE';
            this.alt = 'Project Image';
        });
    });
});

// Add form submission for contact section (placeholder for now)
document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for future contact form functionality
    const contactLinks = document.querySelectorAll('.social-links a');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('Contact link clicked:', e.target.href || e.target.parentElement.href);
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 30, 30, 0.98)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(30, 30, 30, 0.95)';
        navbar.style.padding = '1rem 0';
    }
});