function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("active");
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("active");
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.getElementById("mobile-menu");

  if (
    !navbar.contains(event.target) &&
    mobileMenu.classList.contains("active")
  ) {
    mobileMenu.classList.remove("active");
  }
});

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>;

AOS.init({
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
});
