document.querySelectorAll(".gallary section").forEach((tile)=>{ //can't apply onclick to array
    tile.onclick = () => {
        const label = tile.querySelector("h4").innerHTML;
        const imgSRC = tile.querySelector("img").src;
    }
}); 