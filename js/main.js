// Update the copyright year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile navigation after selecting a section.
const navMenu = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});
