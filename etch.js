let size = parseInt(prompt("Enter a positive integer for the size of the grid"));

const arr = [];
const container = document.getElementById("container");

function setup(size){
    arr.length = 0;
    
    for (let i = 0 ; i < size; i++){
        const div = document.createElement("div");
        div.classList.add("row");

        for (let j = 0; j < size; j++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            div.appendChild(pixel);
            pixel.addEventListener("mouseover", hoverfn);
            arr.push(pixel);
        }
        container.appendChild(div);
    }
}

function hoverfn(){
    this.style.backgroundColor = "grey";
}

setup(size);