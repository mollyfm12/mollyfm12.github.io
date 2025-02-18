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



document.addEventListener("DOMContentLoaded", function () {
    const cityLinks = document.querySelectorAll("#cities a");
    const cityDescription = document.getElementById("city-description");
    const gallery = document.getElementById("italy-gallery");

    // Object containing city descriptions and images
    const cityData = {
        "Rome": {
            text: "I visited Rome for my first overnight weekend trip Feburary 10th and 11th, 2024. Rome is a very historical place and you can feel it the second you get there. We were able to go to Vatican City and tour the Sistine Chapel. The artwork there is very beautiful and shocking. Our first night we did a cooking class where they taught us how to make carbonara and 3 different types of italian spritz. Day 2 we visited the Collesuim. It was shocking. I really enjoyed going around and learning about all the history. ",
            images: [src="images/pg2-imgs/coll.JPG", src="images/pg2-imgs/vatican.png", src="images/pg2-imgs/cook.JPG"]
        },
        "Milan": {
            text: "Milan is the fashion capital of Italy, known for its stunning architecture and shopping.",
            images: ["https://picsum.photos/160/160?random=3", "https://picsum.photos/160/160?random=4"]
        },
        "Naples": {
            text: "Naples is famous for its pizza, rich culture, and views of Mount Vesuvius.",
            images: ["https://picsum.photos/160/160?random=5", "https://picsum.photos/160/160?random=6"]
        },
        "Venice": {
            text: "Venice is a unique floating city with charming canals and gondolas.",
            images: ["https://picsum.photos/160/160?random=7", "https://picsum.photos/160/160?random=8"]
        },
        "Amalfi": {
            text: "The beaches in Amalfi are some of the most beautiful in the world.",
            images: ["https://picsum.photos/160/160?random=9", "https://picsum.photos/160/160?random=10"]
        },
        "Lake Como": {
            text: "Lake Como is a picturesque lake surrounded by mountains and villas.",
            images: ["https://picsum.photos/160/160?random=11", "https://picsum.photos/160/160?random=12"]
        },
        "Montepulciano": {
            text: "Montepulciano is a stunning hilltop town known for its wine and medieval charm.",
            images: ["https://picsum.photos/160/160?random=13", "https://picsum.photos/160/160?random=14"]
        }
    };

    cityLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent jumping to top of page
            const cityName = this.textContent; // Get city name

            // Update paragraph text
            cityDescription.textContent = cityData[cityName].text;

            // Update image gallery
            gallery.innerHTML = ""; // Clear previous images
            cityData[cityName].images.forEach(imgSrc => {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.alt = cityName;
                gallery.appendChild(img);
            });

            // Make gallery visible
            gallery.classList.remove("hidden");
        });
    });
}); 

document.getElementById("back-button").addEventListener("click", function() {
    window.location.href = "page3.html";
});