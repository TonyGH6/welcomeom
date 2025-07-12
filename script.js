const reveals = document.querySelectorAll('.reveal');

const onScroll = () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// Révélations générales
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.add('reveal-visible');
    }
  });
}, {
  threshold: 0.3
});

// Éléments animés
document.querySelectorAll('.reveal, .slide-left, .slide-right').forEach(el => {
  observer.observe(el);
});
