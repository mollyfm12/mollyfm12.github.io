setInterval(() => {
    const currentSlide = document.querySelector("#slideshow :not(.hidden)"); //find image that does not have hidden class
    let nextSlide = currentSlide.nextElementSibling; 

    if(nextSlide == null){
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}, 3000);