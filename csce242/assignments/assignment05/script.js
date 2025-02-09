//say hello
document.getElementById("main-hello").onclick = () => {
    const helloText = document.getElementById("hello-text");
    helloText.innerHTML += "hello<br>";
};

//color picker
document.getElementById("color-picker").oninput = (event) => {
    document.getElementById("star").style.color = event.target.value;
};

//change image
document.getElementById("image").onclick =() => {
    const imgElement = document.getElementById("image");
    imgElement.src = "https://picsum.photos/200?" + new Date().getTime();
}

