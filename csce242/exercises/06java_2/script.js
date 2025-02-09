
//happy
document.getElementById("btn-happy").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("happy");
    displayP.innerHTML = "Good Times";
}

//sad 
document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("sad");
    displayP.innerHTML = "Bad times";
}

//hidden
document.getElementById("btn-clear").onclick = () => {
    document.getElementById("display").classList.add("hidden");
}

//keydown
document.getElementById("txt-emotion").onkeyup = () => {
    //const emotion = document.getElementById("txt-emotion").value;
    //const emotion = event.currentTarget.value;
    document.getElementById("emotional-message").innerHTML = 
    "you are feeling " + event.currentTarget.value;
}

