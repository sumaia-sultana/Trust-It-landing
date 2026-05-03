

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".nav-link-mobile");

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-[#2d70c6]", "border-[#2d70c6]");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#2d70c6]", "border-[#2d70c6]");
    }
  });

  mobileNavLinks.forEach((link) => {
    link.classList.remove("text-[#2d70c6]");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#2d70c6]");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);
//  Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// 📌 Navbar Scroll Effect
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".nav-link-mobile");

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-[#2d70c6]", "border-[#2d70c6]");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#2d70c6]", "border-[#2d70c6]");
    }
  });

  mobileNavLinks.forEach((link) => {
    link.classList.remove("text-[#2d70c6]");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#2d70c6]");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

//  Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // reset
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";

  if (name.value.trim() === "") {
    document.getElementById("nameError").innerText = "Name required";
    valid = false;
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").innerText = "Valid email required";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("messageError").innerText = "Minimum 10 characters";
    valid = false;
  }

  if (valid) {
    alert("Message Sent!");
    form.reset();
  }
});
