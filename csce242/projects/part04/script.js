document.addEventListener("DOMContentLoaded", function () {
    const toggleNav = document.getElementById("toggle-nav");
    const navItems = document.getElementById("nav-items");

    // Ensure the menu is hidden initially on small screens
    if (window.innerWidth <= 767) {
        navItems.style.visibility = "hidden";
        navItems.style.opacity = "0";
        navItems.style.height = "0";
        navItems.style.overflow = "hidden";
    }

    toggleNav.addEventListener("click", function () {

        // Toggle visibility without affecting layout
        if (navItems.style.visibility === "hidden") {
            navItems.style.visibility = "visible";
            navItems.style.opacity = "1";
            navItems.style.height = "auto";
        } else {
            navItems.style.visibility = "hidden";
            navItems.style.opacity = "0";
            navItems.style.height = "0";
        }
    });

    // Optional: Ensure it stays visible when resizing back to large screens
    window.addEventListener("resize", function () {
        if (window.innerWidth > 767) {
            navItems.style.visibility = "visible";
            navItems.style.opacity = "1";
            navItems.style.height = "auto";
        } else {
            navItems.style.visibility = "hidden";
            navItems.style.opacity = "0";
            navItems.style.height = "0";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const paragraphs = document.querySelectorAll("#paragraph-container p");
    const images = document.querySelectorAll(".topic-image");

    menu.addEventListener("change", function () {
        const selectedValue = this.value;

        // Hide all paragraphs and images
        paragraphs.forEach(p => p.classList.add("hidden"));
        images.forEach(img => img.classList.add("hidden"));

        // Show the selected paragraph and image
        if (selectedValue) {
            document.getElementById(selectedValue).classList.remove("hidden");
            document.getElementById(selectedValue + "-img").classList.remove("hidden");
        }
    });
});