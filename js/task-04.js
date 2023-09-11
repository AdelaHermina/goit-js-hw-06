
const valueSpan = document.querySelector("#value");

let counterValue = 0;

const counterDiv = document.querySelector("#counter");

counterDiv.addEventListener("click", function (event) {

  if (event.target.dataset.action === "increment") {
    
    counterValue += 1;
  } else if (event.target.dataset.action === "decrement") {
    
    counterValue -= 1;
  }

  
  valueSpan.textContent = counterValue;
});
