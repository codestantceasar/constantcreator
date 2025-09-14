// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile menu after click
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });
});

// Hamburger menu toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fade-in & slide-in animation for sections on scroll
const faders = document.querySelectorAll('.content, .hero, .card');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Typewriter effect for header
const typewriterEl = document.querySelector('.typewriter');
if (typewriterEl) {
  const text = typewriterEl.textContent;
  typewriterEl.textContent = ''; // Clear text initially
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typewriterEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // Typing speed
    } else {
      typewriterEl.classList.add('done');
    }
  }

  setTimeout(typeWriter, 500);
}

// Optional: add hover glow effect for hero/profile images
const heroProfile = document.querySelector('.hero-profile');
if (heroProfile) {
  heroProfile.addEventListener('mouseenter', () => {
    heroProfile.style.boxShadow = '0 0 20px var(--color-primary)';
    heroProfile.style.transform = 'scale(1.05)';
  });
  heroProfile.addEventListener('mouseleave', () => {
    heroProfile.style.boxShadow = 'none';
    heroProfile.style.transform = 'scale(1)';
  });
}

// Optional: header profile image glow on hover
const headerProfile = document.querySelector('.header-top .profile-img');
if (headerProfile) {
  headerProfile.addEventListener('mouseenter', () => {
    headerProfile.style.boxShadow = '0 0 15px var(--color-primary)';
    headerProfile.style.transform = 'scale(1.05)';
  });
  headerProfile.addEventListener('mouseleave', () => {
    headerProfile.style.boxShadow = 'none';
    headerProfile.style.transform = 'scale(1)';
  });
}
