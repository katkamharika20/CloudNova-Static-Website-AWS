/* =========================================================
   CLOUDNOVA - STATIC WEBSITE JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll(".nav-link");
const navButton = document.querySelector(".nav-button");

function closeMobileMenu() {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
}

navLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
});

navButton.addEventListener("click", closeMobileMenu);


/* ================= DROPDOWN ================= */

const dropdown = document.querySelector(".dropdown");
const dropdownButton = document.querySelector(".dropdown-btn");

dropdownButton.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});


/* ================= SMOOTH NAVIGATION ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* ================= SUBSCRIPTION FORM ================= */

const subscribeForm = document.getElementById("subscribeForm");
const subscribeEmail = document.getElementById("subscribeEmail");
const subscribeMessage = document.getElementById("subscribeMessage");

subscribeForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = subscribeEmail.value.trim();

    if (!email || !email.includes("@")) {

        subscribeMessage.textContent =
            "Please enter a valid email address.";

        return;
    }

    subscribeMessage.textContent =
        "Thank you for subscribing!";

    subscribeForm.reset();

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        contactMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    if (!email.includes("@")) {

        contactMessage.textContent =
            "Please enter a valid email address.";

        return;
    }


    contactMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    contactForm.reset();

});


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});