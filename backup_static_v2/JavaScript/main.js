// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
} else {
  document.documentElement.classList.remove("dark");
  themeIcon.classList.replace("fa-sun", "fa-moon");
}

themeToggle.addEventListener("click", () => {
  themeIcon.classList.toggle("fa-sun");
  themeIcon.classList.toggle("fa-moon");

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenuButton.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuButton.classList.remove("active");
    mobileMenu.classList.remove("open");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Update active state in navigation
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});

// Update active navigation link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.remove("opacity-100", "visible");
    backToTopButton.classList.add("opacity-0", "invisible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll(".skill-bar");

const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }
  });
};

// Run once on page load
animateSkillBars();

// Run on scroll
window.addEventListener("scroll", animateSkillBars);
