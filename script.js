// Reveal on scroll
const revealEls = document.querySelectorAll('.section-header, .timeline-item, .edu-card, .skill-card, .contact-card, .achievement-card');

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 150) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
});

// Mobile hamburger (simple toggle)
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinksEl.style.display === 'flex';
  navLinksEl.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) {
    navLinksEl.style.flexDirection = 'column';
    navLinksEl.style.position = 'absolute';
    navLinksEl.style.top = '70px';
    navLinksEl.style.left = '0';
    navLinksEl.style.right = '0';
    navLinksEl.style.background = 'var(--bg)';
    navLinksEl.style.padding = '1.5rem 2rem';
    navLinksEl.style.borderBottom = '1px solid var(--border)';
    navLinksEl.style.gap = '1.25rem';
  }
});

navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinksEl.style.display = 'none';
    }
  });
});
