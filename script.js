document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  const arrow = document.querySelector(".arrow-container");

  // Smooth scroll function
  function scrollToSection(section) {
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop - 40, // Offset for the fixed header
    });
  }

  // Add click event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute("href").substring(1); // Get target section id
      const targetSection = document.getElementById(targetId); // Get target section element
      if (targetSection) {
        scrollToSection(targetSection); // Scroll to the target section
      }
    });
  });

  // Add click event listener to arrow
  if (arrow) { // Ensure the arrow exists before adding event listener
    arrow.addEventListener("click", function() {
      const currentSection = document.querySelector(".home");
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        scrollToSection(nextSection); // Scroll to the next section
      }
    });
  }

  // Change active navigation link based on scroll position
  function changeActiveNavLink() {
    let index = 0;
    sections.forEach((section, idx) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        index = idx;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    navLinks[index].classList.add("active");
  }

  window.addEventListener("scroll", changeActiveNavLink);
});
