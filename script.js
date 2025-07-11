function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
  const navbar = document.querySelector('.navbar');
  const mobileMenu = document.getElementById('mobile-menu');
  const navbarToggle = document.querySelector('.navbar-toggle');

  if (
    !navbar.contains(event.target) &&
    mobileMenu.classList.contains('active')
  ) {
    mobileMenu.classList.remove('active');
  }
});

// Initialize AOS (Animate On Scroll) if available
document.addEventListener('DOMContentLoaded', function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }
});

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});
