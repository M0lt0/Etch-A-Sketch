let body = document.querySelector("body");
let container = document.querySelector(".container");
let button = document.querySelector(".button");
let rest = document.querySelector(".rest");
let inputColor = document.querySelector(".input-color");
//initial grid
function divCreator(number) {
  let boxes = container.querySelectorAll("div");
  container.style.gridTemplateColumns = `repeat(${number} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${number} , 1fr)`;

  boxes.forEach((boxes) => {
    boxes.remove();
  });
  let area = number * number;
  for (let i = 1; i <= area; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
    box.innerText = i;
    box.addEventListener("mousedown", colorChange);
  }
}
function colorChange() {
  this.style.backgroundColor = `${inputColor.value}`;
}

divCreator(16);

//custom grid number
button.addEventListener("click", () => {
  let theNewNumber = prompt("how many boxes you want: maximum 16 ", 16);
  if (theNewNumber <= 16 && theNewNumber !== null) {
    divCreator(theNewNumber);
  } else {
    alert("you can't exceed 100 or keep it blank ");
  }
});
rest.addEventListener("click", restAll);
function restAll() {
  let container = document.querySelector(".container");
  let boxes = container.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
}
