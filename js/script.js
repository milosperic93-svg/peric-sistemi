/* =====================================
   PERIĆ SISTEMI
   script.js
===================================== */

// Promena headera pri skrolovanju

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,8,8,.96)";
        header.style.padding = "0";

    } else {

        header.style.background = "rgba(10,10,10,.85)";

    }

});

// Animacija sekcija pri pojavljivanju

const sections = document.querySelectorAll(
    ".service, .brand, .box, .item, .why-grid div"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.7s ease";

    observer.observe(section);

});

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Godina u footeru

const copy = document.querySelector(".copyright");

if (copy) {

    copy.innerHTML =
        `© ${new Date().getFullYear()} Perić Sistemi. Sva prava zadržana.`;

}

console.log("Perić Sistemi sajt učitan.");