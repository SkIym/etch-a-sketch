// Global, default values

const DEFSIZE = 16;
const gridContainer = document.getElementById("grid-container")

// When grid size is toggled by the user 
const sizeRange = document.getElementById("setSquareNumber");
sizeRange.onchange = (e) => resizeGrid(e.target.value);


function clearGrid() {
    gridContainer.innerHTML = "";
}

function resizeGrid(size) {
    clearGrid()
    setGrid(size)
}

// Credit: michalosman, TOP
let toggleLMB = false
document.body.onmousedown = () => (toggleLMB = true)
document.body.onmouseup = () => (toggleLMB = false)

function changeColor(e) {
    const square = e.target;
    // hover + LMB
    if (e.type === 'mouseover' && toggleLMB) {
        square.style.backgroundColor = "black";
    }
}

// Create the grid, add listeners


function setGrid(size=16) {

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let s = 0; s < size*size; s+=1) {
        const square = document.createElement("div");
        square.classList.add("grid-item");
        square.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(square);
    
    }
}

// When site loads
window.onload = () => {
    setGrid(DEFSIZE);
}