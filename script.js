const hamburger = document.querySelector('.hamburg');
const cancel = document.querySelector('.cancel');
const dropdown = document.querySelector('.dropdown');
const navLinks = document.querySelectorAll('.links a');

hamburger.addEventListener('click', () => {
    dropdown.style.transform = 'translateY(0)';
    hamburger.setAttribute('aria-expanded', 'true');
});

cancel.addEventListener('click', () => {
    dropdown.style.transform = 'translateY(-100%)';
    hamburger.setAttribute('aria-expanded', 'false');
});

// Smooth scrolling for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        if (dropdown.style.transform === 'translateY(0)') {
            dropdown.style.transform = 'translateY(-100%)';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// Typewriter Effect
const texts = ['SOFTWARE ENGINEER', 'AI, ML ENGINEER', 'URDU POET'];
const textElements = document.querySelector('.typewriter-text');
let textIndex = 0;
let charIndex = 0;
const speed = 100;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElements.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.textContent.length > 0) {
        textElements.textContent = textElements.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

// Keyboard Accessibility for Dropdown
dropdown.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dropdown.style.transform = 'translateY(-100%)';
        hamburger.setAttribute('aria-expanded', 'false');
    }
});