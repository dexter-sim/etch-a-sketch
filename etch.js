let rainbow = false;
let color = "#000000";
let arr = [];

const container = document.getElementById("container");
const colorbtn = document.getElementById("colormode");
const rainbowbtn = document.getElementById("rainbowmode");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");

colorbtn.addEventListener("click", () => { rainbow = false; })
rainbowbtn.addEventListener("click", () => { rainbow = true; });
eraser.addEventListener("click", () => { rainbow = false; color = "#FFFFFF"; });
clear.addEventListener("click", clearAll);

function clearAll(){
    for (let i = 0; i < arr.length; i++){
        arr[i].style.backgroundColor = "#FFFFFF";
    }
}

function colorSelected(element){
    color = element.value;
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
            pixel.style.width = JSON.stringify(600/size) + "px";
            pixel.style.height = JSON.stringify(600/size) + "px";

        }
        container.appendChild(div);
    }
}

function hoverfn(){
    if (rainbow){
        this.style.backgroundColor = "#" + (Math.floor(Math.random() * 16777215)).toString(16);
    } else {
        this.style.backgroundColor = color;
    }
}

let slider = document.getElementById("myRange");
let output = document.getElementById("dimension");
let size = parseInt(slider.value);
output.textContent = slider.value + "x" + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = () => {
    output.textContent = slider.value + "x" + slider.value;
    setup(slider.value);
}

setup(size);