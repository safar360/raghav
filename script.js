// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Ensure keyboard activation works (button handles Enter/Space by default). Keep pointer cursor.
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
        if (navMenu) navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Payment Functions
function openUPI() {
    // UPI Payment integration
    const upiId = 'raghavtemple@paytm'; // Replace with actual UPI ID
    const amount = prompt('Enter donation amount (₹):');
    
    if (amount && !isNaN(amount) && amount > 0) {
        const upiUrl = `upi://pay?pa=${upiId}&pn=Raghav%20Temple&am=${amount}&cu=INR&tn=Temple%20Donation`;
        
        // Try to open UPI app
        window.location.href = upiUrl;
        
        // Fallback: Show payment details
        setTimeout(() => {
            alert(`UPI Payment Details:\n\nUPI ID: ${upiId}\nAmount: ₹${amount}\nPurpose: Temple Donation\n\nPlease use any UPI app to complete the payment.`);
        }, 1000);
    }
}

function openBankTransfer() {
    const bankDetails = `
Bank Transfer Details:

Bank Name: State Bank of India
Account Name: Raghav Temple Trust
Account Number: 1234567890
IFSC Code: SBIN0001234
Branch: Main Branch

Please include "Temple Donation" in the transfer description.
    `;
    
    alert(bankDetails);
    
    // Copy to clipboard
    navigator.clipboard.writeText(bankDetails).then(() => {
        console.log('Bank details copied to clipboard');
    }).catch(err => {
        console.log('Could not copy bank details:', err);
    });
}

// WhatsApp Sharing Function
function shareToWhatsApp() {
    const donationAmount = prompt('Enter the donation amount you made (₹):');
    
    if (donationAmount && !isNaN(donationAmount)) {
        const message = `🕉️ *Raghav Temple Donation* 🕉️

I have made a donation of ₹${donationAmount} to Raghav Temple.

Your generosity helps us:
• Maintain the temple premises
• Organize community events
• Support charitable activities
• Preserve sacred traditions

Join us in supporting our temple! 🙏

#RaghavTemple #TempleDonation #CommunitySupport`;

        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Lazy Loading for Images
const images = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.event-card, .member-card, .promotion-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Donation Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start).toLocaleString();
        
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        }
    }, 16);
}

// Initialize donation counter when section comes into view
const donationSection = document.querySelector('.donation-section');
if (donationSection) {
    const donationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate donation counter if you have one
                const counterElement = document.querySelector('.donation-counter');
                if (counterElement) {
                    animateCounter(counterElement, 50000); // Example: ₹50,000 raised
                }
                donationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    donationObserver.observe(donationSection);
}

// Google AdSense Integration (placeholder)
function initializeAds() {
    // This is where you would initialize Google AdSense
    // For now, we'll just log that ads are ready
    console.log('Ad spaces ready for Google AdSense integration');
    
    // Example of how to add AdSense code:
    /*
    const adScript = document.createElement('script');
    adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    adScript.async = true;
    adScript.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXX');
    document.head.appendChild(adScript);
    */
}

// Initialize ads when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAds);

// Service Worker Registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Performance Monitoring
window.addEventListener('load', () => {
    // Log page load time
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    
    // Log Core Web Vitals if available
    if ('web-vitals' in window) {
        // This would require the web-vitals library
        console.log('Core Web Vitals monitoring available');
    }
});

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Print Functionality
function printPage() {
    window.print();
}

// Before/After Modal Functionality
function showBeforeAfter() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('beforeAfterModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'beforeAfterModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>🏗️ Temple Reconstruction Progress</h2>
                <div class="before-after-container">
                    <div class="before-after-item">
                        <h3>Before Reconstruction</h3>
                        <img src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=300&fit=crop" alt="Temple Before" loading="lazy">
                        <p>Original temple structure showing areas needing reconstruction</p>
                    </div>
                    <div class="before-after-item">
                        <h3>Current Progress</h3>
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop" alt="Temple Progress" loading="lazy">
                        <p>Phase 2 reconstruction in progress - Main Hall & Sanctum</p>
                    </div>
                    <div class="before-after-item">
                        <h3>Future Vision</h3>
                        <img src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=300&fit=crop" alt="Temple Vision" loading="lazy">
                        <p>Completed reconstruction with modern amenities and traditional architecture</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="window.location.href='#donate'">
                        <i class="fas fa-heart"></i>
                        Support Reconstruction
                    </button>
                    <button class="btn btn-secondary" onclick="closeModal()">
                        Close
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('beforeAfterModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('beforeAfterModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Advertisement Carousel Functionality
let currentSlide = 0;
const totalSlides = 3; // Number of slides (groups of ads)
const adsPerSlide = 2; // Ads visible per slide on mobile

function scrollAds(direction) {
    const track = document.querySelector('.ads-track');
    const banners = document.querySelectorAll('.ad-banner');
    const bannerWidth = banners[0].offsetWidth + 24; // width + gap
    
    if (direction === 'left') {
        currentSlide = Math.max(0, currentSlide - 1);
    } else {
        currentSlide = Math.min(totalSlides - 1, currentSlide + 1);
    }
    
    const translateX = -currentSlide * bannerWidth * adsPerSlide;
    track.style.transform = `translateX(${translateX}px)`;
    
    updateDots();
    updateButtons();
}

function currentSlide(slideNumber) {
    currentSlide = slideNumber - 1;
    const track = document.querySelector('.ads-track');
    const banners = document.querySelectorAll('.ad-banner');
    const bannerWidth = banners[0].offsetWidth + 24;
    
    const translateX = -currentSlide * bannerWidth * adsPerSlide;
    track.style.transform = `translateX(${translateX}px)`;
    
    updateDots();
    updateButtons();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function updateButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Eco Tips Modal
function showEcoTips() {
    let modal = document.getElementById('ecoTipsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'ecoTipsModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeEcoModal()">&times;</span>
                <h2>🌱 Eco-Friendly Tips</h2>
                <div class="eco-tips-container">
                    <div class="eco-tip">
                        <i class="fas fa-shopping-bag"></i>
                        <h3>Use Cloth Bags</h3>
                        <p>Carry reusable cloth bags instead of plastic bags when shopping</p>
                    </div>
                    <div class="eco-tip">
                        <i class="fas fa-coffee"></i>
                        <h3>Carry Your Own Cup</h3>
                        <p>Use your own cup or bottle for beverages to reduce single-use plastic</p>
                    </div>
                    <div class="eco-tip">
                        <i class="fas fa-recycle"></i>
                        <h3>Recycle Properly</h3>
                        <p>Separate recyclable materials and dispose of them correctly</p>
                    </div>
                    <div class="eco-tip">
                        <i class="fas fa-seedling"></i>
                        <h3>Plant Trees</h3>
                        <p>Participate in tree plantation drives and maintain green spaces</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="shareEcoTips()">
                        <i class="fab fa-whatsapp"></i>
                        Share Tips
                    </button>
                    <button class="btn btn-secondary" onclick="closeEcoModal()">
                        Close
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeEcoModal() {
    const modal = document.getElementById('ecoTipsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function shareEcoTips() {
    const message = `🌱 *Eco-Friendly Tips from Raghav Temple* 🌱

Join our initiative to protect the environment:

✅ Use cloth bags instead of plastic
✅ Carry your own cup/bottle
✅ Recycle materials properly
✅ Plant and maintain trees
✅ Reduce single-use plastic

Together, we can make a difference! 🌍

#EcoFriendly #GreenInitiative #RaghavTemple`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Touch/Swipe support for mobile
let startX = 0;
let isDragging = false;

document.addEventListener('DOMContentLoaded', () => {
    const adsTrack = document.querySelector('.ads-track');
    
    if (adsTrack) {
        // Touch events for mobile
        adsTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        adsTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        adsTrack.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) { // Minimum swipe distance
                if (diffX > 0) {
                    scrollAds('right');
                } else {
                    scrollAds('left');
                }
            }
            
            isDragging = false;
        });
        
        // Mouse events for desktop
        adsTrack.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            adsTrack.style.cursor = 'grabbing';
        });
        
        adsTrack.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        adsTrack.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            
            const endX = e.clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    scrollAds('right');
                } else {
                    scrollAds('left');
                }
            }
            
            isDragging = false;
            adsTrack.style.cursor = 'grab';
        });
        
        adsTrack.addEventListener('mouseleave', () => {
            isDragging = false;
            adsTrack.style.cursor = 'grab';
        });
    }
    
    // Initialize carousel
    updateDots();
    updateButtons();
    initHeroCarousel();
});

// Hero carousel auto-scroll
function initHeroCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const items = track.querySelectorAll('.carousel-item');
    let index = 0;
    const gap = 12; // must match CSS gap

    function update() {
        if (items.length === 0) return;
        const itemWidth = items[0].getBoundingClientRect().width + gap;
        const maxIndex = items.length - Math.floor(track.parentElement.clientWidth / itemWidth);
        // keep index in range
        if (index > maxIndex) index = 0;
        const translateX = -index * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
        index++;
    }

    let timer = setInterval(update, 3000);

    // Pause on hover
    track.parentElement.addEventListener('mouseenter', () => clearInterval(timer));
    track.parentElement.addEventListener('mouseleave', () => { timer = setInterval(update, 3000); });

    // Run first update after small delay to compute dimensions
    setTimeout(update, 500);
}

// Add print button to footer (optional)
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer-bottom');
    if (footer) {
        const printBtn = document.createElement('button');
        printBtn.textContent = 'Print Page';
        printBtn.className = 'btn btn-outline';
        printBtn.style.marginTop = '1rem';
        printBtn.onclick = printPage;
        footer.appendChild(printBtn);
    }
});

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Export functions for external use
window.TempleWebsite = {
    openUPI,
    openBankTransfer,
    shareToWhatsApp,
    formatCurrency,
    formatDate,
    printPage,
    showBeforeAfter,
    closeModal,
    showEcoTips,
    closeEcoModal,
    shareEcoTips,
    scrollAds,
    currentSlide
};

