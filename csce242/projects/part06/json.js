const getBuda = async () => {
    const url = "https://mollyfm12.github.io/csce242/json/budapest.json"

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error){
        console.log(error);
    }

};
const showBuda = async () => {
    let buda = await getBuda();
    let budaSection = document.getElementById("buda-section");
    buda.forEach((buda) => {
        budaSection.append(getBudaItem(buda));
    });
};

const getBudaItem = (buda) => {
    let section = document.createElement("section");
    section.classList.add("buda-item"); // Add CSS class for styling

    let textContainer = document.createElement("div"); // Wrap text elements
    let h3 = document.createElement("h3");
    h3.innerText = buda.name;

    let p = document.createElement("p");
    p.innerText = buda.description;

    textContainer.append(h3, p); // Add h3 and p to the text container

    let img = document.createElement("img");
    img.src = `images/index-imgs/${buda.image}`;
    img.alt = buda.name;

    section.append(textContainer, img); // Append text container and image

    return section;
};

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
}

window.onload = showBuda;