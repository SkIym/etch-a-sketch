


// Create the grid squares, add listeners

const gridContainer = document.querySelector(".grid-container")

for (let s = 0; s < 16*16; s+=1) {
    const square = document.createElement("div");
    square.style.width = "30px";
    square.style.height = "30px";
    square.style.backgroundColor = "red";

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });

    gridContainer.appendChild(square);

}

