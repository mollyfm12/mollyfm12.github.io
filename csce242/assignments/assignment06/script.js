document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("menu-toggle");
    let menuItems = document.getElementById("menu-items");
    let exercise1 = document.getElementById("exercise1");
    let exercise2 = document.getElementById("exercise2");
    let transportInput = document.getElementById("transport");
    let transportImage = document.getElementById("transport-image");
    let heart = document.getElementById("heart");

    exercise1.style.display = "none";
    exercise2.style.display = "none";

    // Toggle small screens
    menuToggle.addEventListener("click", function () {
        if (menuItems.style.display === "none" || menuItems.style.display === "") {
            menuItems.style.display = "flex";
            menuToggle.innerHTML = "&#9650;"; // Up Arrow
        } else {
            menuItems.style.display = "none";
            menuToggle.innerHTML = "&#9660;"; // Down Arrow
        }
    });

    // One exercise at a time
    window.showExercise = function (exerciseNumber) {
        if (exerciseNumber === 1) {
            exercise1.style.display = "block";
            exercise2.style.display = "none";
        } else if (exerciseNumber === 2) {
            exercise1.style.display = "none";
            exercise2.style.display = "block";
        }
    };

    // Transport images
    window.showTransportImage = function () {
        let transport = document.getElementById("transport").value.toLowerCase();
        let transportImage = document.getElementById("transport-image");
    
        let validTransports = {
            bike: "https://img.freepik.com/free-vector/bike-trial-concept-illustration_114360-9860.jpg?ga=GA1.1.1398373809.1739770696&semt=ais_authors_boost",
            scooter: "https://img.freepik.com/free-vector/electric-transport-car-concept-illustration_114360-2486.jpg?ga=GA1.1.1398373809.1739770696&semt=ais_authors_boost",
            car: "https://img.freepik.com/free-vector/driving-concept-illustration_114360-14312.jpg?ga=GA1.1.1398373809.1739770696&semt=ais_authors_boost", 
            skateboard: "https://img.freepik.com/free-vector/skateboarding-concept-illustration_114360-2854.jpg?ga=GA1.1.1398373809.1739770696&semt=ais_authors_boost" 
        };
    
        if (validTransports[transport]) {
            transportImage.innerHTML = `<img src="${validTransports[transport]}" alt="${transport}" style="width: 200px; height: auto;">`;
        } else {
            transportImage.innerHTML = ""; // Clear the image if input is invalid
        }
    };

    // Change heart color
    window.changeHeartColor = function (color) {
        heart.style.color = color;
    };

    // Large screens
    function adjustMenu() {
        if (window.innerWidth > 768) {
            menuToggle.style.display = "none"; // Hide menu toggle
            menuItems.style.display = "flex"; // Show menu items
        } else {
            menuToggle.style.display = "block"; // Show toggle button
            menuItems.style.display = "none"; // Hide menu items initially
        }
    }

    adjustMenu();
    window.addEventListener("resize", adjustMenu);
});
