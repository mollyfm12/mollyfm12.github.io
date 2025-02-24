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

//show up every time

let count = 0;
let updateCount;

document.querySelector("#btn-count").onclick = (event) => {
    if (event.currentTarget.innerHTML.toLowerCase() == "start") {
        event.currentTarget.innerHTML = "Stop"; 
        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        }, 1000); //declared entire function with => then the second number says to update it every 1 second
    }
    else {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount);
    }
};

document.querySelector("#btn-reset").onclick = () => {
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML = "Start";
    document.querySelector("#count-display").innerHTML = "";
}

document.querySelector("btn-show-toys").onclick = (event) => {
    const toys = ["ball", "skipping rope", "doll"]//array
    
    event.currentTarget.disabled = true; //disable button
    /*
    for(let i = 0; i < toys.length; i++){
        console.log(toys[i])
    }
    */

    const ul = document.createElement("ul");
    document.getElementById("display-toys").append(ul);

    toys.forEach((toy, i)=>{ //loop through the toys, for each toy within {}
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML= '${i+1}. ${toy}';
    });

};


//loop through associative array 
//associate array is a key value to compare, ball is key, an item to throw is value
document.getElementById("btn-show-toy-desc").onclick = () => {
    const toys = []
    toys["ball"] = "an item to throw";
    toys["doll"] = "an item to love";
    toys["skipping rope"] = "an item to exercise";

    const section = document.getElementById("display-toy-desc");
    for(let toy in toys){
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = '${toy}: ${toys[toy]}';
    }
};