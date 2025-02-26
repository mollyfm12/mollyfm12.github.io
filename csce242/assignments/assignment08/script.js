document.addEventListener("DOMContentLoaded", function () {
    const images = {
        "Happy Birthday": "images/birthday.jpg",
        "Crazy Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Quiet Time": "images/read.jpg",
        "Working Hard": "images/shovel.jpg",
        "Work from Home": "images/work.jpg"
    };

    // Select elements inside <main>
    const titleElements = document.querySelectorAll("main p");

    titleElements.forEach(p => {
        const title = p.textContent.trim();
        if (images[title]) {
            p.classList.add("title");
            p.addEventListener("click", function () {
                showPopup(title, images[title]);
            });
        }
    });

    // Popup
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.classList.add("hidden");
    popup.innerHTML = `
        <div class="popup-content">
            <span id="close">&#10006;</span>
            <h2 id="popup-title"></h2>
            <img id="popup-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(popup);

    const closeButton = document.getElementById("close");

    function showPopup(title, imageSrc) {
        document.getElementById("popup-title").textContent = title;
        document.getElementById("popup-image").src = imageSrc;
        popup.classList.remove("hidden");
    }

    // Close popup with close button
    closeButton.addEventListener("click", function () {
        popup.classList.add("hidden");
    });
});
