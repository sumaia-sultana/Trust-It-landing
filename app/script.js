

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
    link.classList.remove("text-[#A37764]", "border-[#A37764]");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#A37764]", "border-[#A37764]");
    }
  });

  mobileNavLinks.forEach((link) => {
    link.classList.remove("text-[#A37764]");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#A37764]");
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
    link.classList.remove("text-[#A37764]", "border-[#A37764]");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#A37764]", "border-[#A37764]");
    }
  });

  mobileNavLinks.forEach((link) => {
    link.classList.remove("text-[#A37764]");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-[#A37764]");
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


// services.js / data fetching


// const servicesContainer = document.getElementById("services-container");

// servicesContainer.innerHTML = services.map(service => `
//   <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-blue-200 hover:shadow-lg transition-all">
    
//     <div class="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-sm mb-6 border border-slate-100 dark:border-slate-600">
//       ${service.icon}
//     </div>

//     <h3 class="text-xl font-bold mb-3 text-[#2d2521] dark:text-white">
//       ${service.title}
//     </h3>

//     <p class="text-slate-600 leading-relaxed text-sm dark:text-slate-300">
//       ${service.description}
//     </p>

//   </div>
// `).join("");
