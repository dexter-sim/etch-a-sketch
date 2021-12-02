let rainbow = false;
let erase = false;
let colorSelect = "#000000";
let arr = [];

const container = document.getElementById("container");
const colorbtn = document.getElementById("colormode");
const rainbowbtn = document.getElementById("rainbowmode");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const chooseColor = document.getElementById("chooseColor");

let slider = document.getElementById("myRange");
let output = document.getElementById("dimension");
let size = parseInt(slider.value);
output.textContent = slider.value + "x" + slider.value;

chooseColor.addEventListener("input", () => { colorSelect = chooseColor.value; });
colorbtn.addEventListener("click", () => { rainbow = false; erase = false; });
rainbowbtn.addEventListener("click", () => { rainbow = true; erase = false; });
eraser.addEventListener("click", () => { rainbow = false; erase = true; });
clear.addEventListener("click", clearAll);

function clearAll(){
    for (let i = 0; i < arr.length; i++){
        arr[i].style.backgroundColor = "#FFFFFF";
    }
}

function setup(size){
    arr = [];
    container.innerHTML = "";
    
    for (let i = 0 ; i < size; i++){
        const div = document.createElement("div");
        div.classList.add("row");

        for (let j = 0; j < size; j++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            div.appendChild(pixel);
            pixel.addEventListener("mouseover", hoverfn);
            arr.push(pixel);
            pixel.style.width = JSON.stringify(620/size) + "px";
            pixel.style.height = JSON.stringify(620/size) + "px";

        }

        container.appendChild(div);
    }
}

function hoverfn(){
    if (rainbow){
        this.style.backgroundColor = "#" + (Math.floor(Math.random() * 16777215)).toString(16);
    } else if (erase) {
        this.style.backgroundColor = "#FFFFFF";
    } else {
        this.style.backgroundColor = colorSelect;
    }
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = () => {
    output.textContent = slider.value + "x" + slider.value;
    setup(slider.value);
}

setup(size);