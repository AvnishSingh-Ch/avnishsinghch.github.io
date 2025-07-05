var typed = new Typed(".typing", {
  strings: ["", "Cybersecurity Student", "Ethical Hacker", "Penetration Tester", "Security Analyst", "Python Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    // Remove back-section class from all sections
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section");
    }
    // Loop for removing active class and adding back-section
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // Find the currently active section and add back-section to it
        const activeTarget = navList[j].querySelector("a").getAttribute("href").split("#")[1];
        const activeSection = document.querySelector("#" + activeTarget);
        if (activeSection) {
          activeSection.classList.add("back-section");
        }
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    // Adding active class to clicked navigation
    this.classList.add("active");
    showSection(this); // Function call
    // Nav click event - Hiding the nav menu on mobile
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  // Loop for removing active class from all sections
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  const targetSection = document.querySelector("#" + target);
  if (targetSection) {
    targetSection.classList.add("active");
  }
}

// For Contact Me button
const contactBtn = document.querySelector(".hire-me");
if (contactBtn) {
  contactBtn.addEventListener("click", function () {
    showSection(this);
    updateNav(this);
  });
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

// For Nav Toggler Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
  
if (navTogglerBtn && aside) {
  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
  });
}

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  
  // Close navigation when clicking outside on mobile
  const mainContent = document.querySelector(".main-content");
  if (aside.classList.contains("open") && mainContent) {
    mainContent.addEventListener("click", () => {
      aside.classList.remove("open");
      navTogglerBtn.classList.remove("open");
    }, { once: true });
  }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Set home section as active by default
  const homeSection = document.querySelector("#home");
  const homeNavLink = document.querySelector('a[href="#home"]');
  
  if (homeSection && homeNavLink) {
    homeSection.classList.add("active");
    homeNavLink.classList.add("active");
  }
  
  // Add click event listeners to all navigation links
  const allNavLinks = document.querySelectorAll('.nav a');
  allNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Remove active class from all sections and nav links
        document.querySelectorAll('.section').forEach(section => {
          section.classList.remove('active', 'back-section');
        });
        document.querySelectorAll('.nav a').forEach(navLink => {
          navLink.classList.remove('active');
        });
        
        // Add active class to target section and nav link
        targetSection.classList.add('active');
        this.classList.add('active');
        
        // Close mobile navigation if open
        if (window.innerWidth < 1200) {
          aside.classList.remove('open');
          navTogglerBtn.classList.remove('open');
        }
      }
    });
  });
  
  // Add form submission handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const subject = this.querySelector('input[placeholder="Subject"]').value;
      const message = this.querySelector('textarea').value;
      
      // Basic validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields before submitting.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Create mailto link (since this is a static site)
      const mailtoLink = `mailto:hello@avnishsingh.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show confirmation
      alert('Thank you for your message! Your email client should open now. If not, please email me directly at hello@avnishsingh.tech');
      
      // Reset form
      this.reset();
    });
  }
  
  // Add scroll to top functionality
  const backToTopBtn = document.querySelector('#backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
      const activeSection = document.querySelector('.section.active');
      if (activeSection) {
        activeSection.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }
});

// Matrix background effect
function initMatrix() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");
  
  const fontSize = 10;
  const columns = canvas.width / fontSize;
  
  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
  
  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px arial';
    
    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(drawMatrix, 35);
  
  // Resize canvas when window resizes
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Initialize matrix effect when page loads
window.addEventListener('load', initMatrix);
