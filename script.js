// Global, default values

const DEFSIZE = 16;
const gridContainer = document.getElementById("grid-container")
const sizeRange = document.getElementById("setSquareNumber");
const colorPicker = document.getElementById("setColor");
const pickerWrapper = document.getElementById("picker-wrapper");
const clearCanvas = document.getElementById("clearCanvas");
const randomColor = document.getElementById("randomColor");
const shadeColor = document.getElementById("shadeColor");

let color = "black";
let mode = "regular";


// When grid size is toggled by the user 
sizeRange.onchange = (e) => resizeGrid(e.target.value);

function clearGrid() {
    gridContainer.innerHTML = "";
}

function resizeGrid(size) {
    clearGrid()
    setGrid(size)
}

// Clear canvas, same size
clearCanvas.onclick = () => resizeGrid(sizeRange.value);

// When color picker is changed by the user
colorPicker.onchange = () => {
    color = colorPicker.value
    pickerWrapper.style.backgroundColor = color;
};

let rgbActive = false;

// Color modes
randomColor.onclick = () => {
    rgbActive = !rgbActive;
    if (rgbActive) {
        mode = "rainbow";
        randomColor.classList.add("active")
    }
    else {
        mode = "regular";
        color = `${colorPicker.value}`;
        randomColor.classList.remove("active")
    }
    
};

let shadeActive = false;

shadeColor.onclick = () => {
    shadeActive = !shadeActive;
    if (shadeActive) {
        mode = "shade";
        shadeColor.classList.add("active")
    }
    else {
        mode = "regular";
        color = `${colorPicker.value}`;
        shadeColor.classList.remove("active")
    }
};


// Credit: michalosman, TOP
let toggleLMB = false
document.body.onmousedown = () => (toggleLMB = true)
document.body.onmouseup = () => (toggleLMB = false)

function changeColor(e) {
    const square = e.target;
    // hover + LMB
    if (e.type === 'mouseover' && toggleLMB) {  
        if (mode == "rainbow") {
            const red = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            square.style.backgroundColor  = `rgb(${red},${blue},${green})`;
            return
        }
        else if (mode == "shade") {
            return
        }
        square.style.backgroundColor = color;
    }
}

// Create the grid, add listeners
function setGrid(size) {

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