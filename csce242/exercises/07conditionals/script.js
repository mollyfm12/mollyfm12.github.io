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
};

//toggle the nav
document.getElementById("toggle-nav").onclick= () => {
    document.getElementById("nav-itmes").classList.toggle("hide-small");
};

document.getElementById("txt-color").onclick = () => {
    const color = document.getElementById("txt-color").value;
    let mood = "Happy";

    if (color == "blue"){
        mood="grumpy"
    }
    else {
        mood = "undefined"
    }

    document.getElementById("color-message").innerHTML = `You chose ${color}. You are feeling ${mood}`
};

let pos = 0;
const changeCirclePos = (increment) => {
    pos += increment; //declared outside the function or else would be reset each time
    document.getElementById("circle").style.setProperty("top", pos + "px");
};

document.getElementById("btn-down").onclick = () => {
    pos++;
}

document.getElementById("btn-up").onclick = () => {
    pos--;
}

document.getElementById("btn-pick-color").onclick = () => {
    console.log("color");
}