// Typed.js initialization
var typed = new Typed('.multiple-text', {
    strings: ['AI Engineer', 'Full Stack Developer', 'SEO & Meta Ads Expert'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Scroll section active link implementation (simplified)
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// Testimonials Carousel
let currentTestimonial = 0;
function showTestimonial(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    if(slides.length === 0) return;
    slides.forEach(slide => slide.style.display = 'none');
    if (index >= slides.length) currentTestimonial = 0;
    if (index < 0) currentTestimonial = slides.length - 1;
    slides[currentTestimonial].style.display = 'block';
}

function nextTestimonial() {
    currentTestimonial++;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial--;
    showTestimonial(currentTestimonial);
}

// AI Sentiment Analyzer Simulation
function analyzeSentiment() {
    const input = document.getElementById('ai-input').value.trim();
    const resultDiv = document.getElementById('ai-result');
    
    if (input === '') {
        resultDiv.innerHTML = '<span style="color: #f39c12;">Please enter some text!</span>';
        return;
    }
    
    resultDiv.innerHTML = '<span style="color: #666;">Analyzing <i class="bx bx-loader bx-spin"></i></span>';
    
    // Simulate API delay
    setTimeout(() => {
        const positiveWords = ['good', 'great', 'awesome', 'excellent', 'love', 'amazing', 'brilliant', 'beautiful'];
        const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'poor', 'worst', 'ugly'];
        
        const lowerInput = input.toLowerCase();
        let score = 0;
        
        positiveWords.forEach(word => { if(lowerInput.includes(word)) score++; });
        negativeWords.forEach(word => { if(lowerInput.includes(word)) score--; });
        
        if (score > 0) {
            resultDiv.innerHTML = '<span style="color: #2ecc71; background: rgba(46, 204, 113, 0.1); padding: 0.5rem 1rem; border-radius: 20px;">Positive ??</span>';
        } else if (score < 0) {
            resultDiv.innerHTML = '<span style="color: #e74c3c; background: rgba(231, 76, 60, 0.1); padding: 0.5rem 1rem; border-radius: 20px;">Negative ??</span>';
        } else {
            resultDiv.innerHTML = '<span style="color: #3498db; background: rgba(52, 152, 219, 0.1); padding: 0.5rem 1rem; border-radius: 20px;">Neutral ??</span>';
        }
    }, 1200);
}


// Custom Cursor Logic
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add a slight delay for the outline for a cool trailing effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Add hover effect to interactive elements
const interactives = document.querySelectorAll('a, button, .close-modal');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '50px';
        cursorOutline.style.height = '50px';
        cursorOutline.style.backgroundColor = 'rgba(255, 107, 158, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '30px';
        cursorOutline.style.height = '30px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// ScrollReveal Animations
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, section.about .heading, section.testimonials .heading, section.contact .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .testimonial-wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// Dark Mode Toggle
const darkModeIcon = document.getElementById('dark-mode-icon');
darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    }
});


// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}


// Chatbot Logic
function toggleChat() {
    document.getElementById('chat-window').classList.toggle('show');
}




// Handle Free-Text Chat
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleUserChat();
            }
        });
    }
});

function handleUserChat() {
    const inputField = document.getElementById('chat-input');
    const userText = inputField.value.trim();
    if (!userText) return;
    
    const chatBody = document.getElementById('chat-body');
    
    // 1. Add User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    userMsg.innerText = userText;
    chatBody.appendChild(userMsg);
    
    // Clear input
    inputField.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // 2. Generate Bot Reply
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-msg';
        
        let lower = userText.toLowerCase();
        let reply = "I'm just a simple AI bot! To talk to the real Kushu, please use the Contact Form at the bottom of the page. She will get back to you ASAP! 😊";
        
        if (lower.includes("price") || lower.includes("cost") || lower.includes("charge") || lower.includes("money")) {
            reply = "My freelance web development services start at just $8,000 per website! Send me a message using the Contact Form for a custom quote. 💰";
        } else if (lower.includes("code") || lower.includes("dev") || lower.includes("tech") || lower.includes("stack") || lower.includes("ai")) {
            reply = "I am a Full Stack Developer & AI Engineer! I build robust web apps with Python/Flask, React, and integrate GenAI (like RAG systems). Check out my Projects section! 🚀";
        } else if (lower.includes("marketing") || lower.includes("seo") || lower.includes("ad") || lower.includes("social")) {
            reply = "I specialize in SEO, Meta Ads, and Data Analytics! I can 10x your traffic using AI-driven content strategies and targeted campaigns. 📈";
        } else if (lower.includes("experience") || lower.includes("work") || lower.includes("job") || lower.includes("hire")) {
            reply = "I am currently an In-House Social Media Manager at CleardartLLC, and previously worked as a Web Dev Intern at Skillible. I am open to freelance work or full-time roles! 💼";
        } else if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
            reply = "Hello there! 👋 How can I help you today? You can ask me about Kushu's coding, marketing, or pricing!";
        } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
            reply = "You can email Kushu directly at kushushukla24@gmail.com, or just scroll down and use the Contact Form! 📧";
        }
        
        botMsg.innerHTML = reply;
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 800);
}


// Stats Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            const count = +counter.innerText.replace(/[^0-9]/g, '');
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc) + suffix;
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + suffix;
            }
        };
        updateCount();
    });
};

// Intersection Observer to trigger counter when in view
const statsSection = document.querySelector('.stats-banner');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}
