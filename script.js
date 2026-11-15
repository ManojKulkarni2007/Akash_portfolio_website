
/* =====================================
   1. AUTOMATIC COPYRIGHT YEAR
===================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* =====================================
   2. MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });

    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            navLinks.classList.remove("show");
        }

    });
}
