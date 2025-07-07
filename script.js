// Smooth scroll for navigation
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close the menu on click (optional)
    nav.classList.remove('active');
  });
});
