function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls");
const boxesDiv = document.querySelector("#boxes");
const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");


createButton.addEventListener("click", createBoxes);


destroyButton.addEventListener("click", destroyBoxes);


function createBoxes() {
 
  const amount = input.value;

  
  const fragment = document.createDocumentFragment();

  
  for (let i = 0; i < amount; i++) {
    
    const box = document.createElement("div");

    //
    const size = 30 + i * 10;
    const randomColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = randomColor;

    fragment.appendChild(box);
  }


  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
 
  boxesDiv.innerHTML = "";
}


