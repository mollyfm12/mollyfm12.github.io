const getBuda = async () => {
    const url = "https://mollyfm12.github.io/refs/heads/main/csce242/json/budapest.json"

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

const getBudaItem=(buda) => {
    let section = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerText = buda.name;
    section.append(h3);

    return section;
}

window.onLoad = () => showBuda();