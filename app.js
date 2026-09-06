const body = document.querySelector("body");
let container = document.querySelector(".container");
const changeSizeBtn = document.querySelector("#change-size");
const randomBtn = document.querySelector("#random-color");

let size = 16;

let defaultColor = "#7B886B";
let opacity = 0;
let randomToggle = false;

// container dimensions
const width = 800;
const height = 800;

container.style.width = `${width}px`;
container.style.height = `${height}px`;

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  return `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
}

function styleUpdate(element) {
  opacity = element.style.opacity;
  color = !randomToggle ? defaultColor : randomColor();
  element.style.backgroundColor = color;
  element.style.opacity = opacity < 1 ? +opacity + 0.25 : 1;
}

// adds (size*size) number of divs to container
// flex properties set in css file
// set even listeners for all div elements in container
function setupGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${width / size}px`;

    square.addEventListener("mouseover", (e) => {
      color = !randomToggle ? defaultColor : randomColor();
      if (e.buttons === 1) {
        styleUpdate(square);
      }
    });

    square.addEventListener("mousedown", () => {
      styleUpdate(square);
    });

    container.appendChild(square);
  }
}

// get size input
// remove existing container
// create new container and call setupGrid for it
// assign newContainer to container;
changeSizeBtn.addEventListener("click", () => {
  size = +prompt("Enter a positive integer between 4 and 64:");

  if (!(Number.isInteger(size) && size > 0) || !(size >= 4 && size <= 64)) {
    alert("Invalid Input. Size set to default (16x16)");
    size = 16;
  }

  container.remove();

  let newContainer = document.createElement("div");
  newContainer.classList.add("container");

  newContainer.style.width = `${width}px`;
  newContainer.style.height = `${height}px`;

  body.appendChild(newContainer);

  container = newContainer;

  setupGrid(size);
});

randomBtn.addEventListener("click", () => {
  if (randomToggle) {
    randomToggle = false;
    randomBtn.style.backgroundColor = "#714955";
  } else {
    randomToggle = true;
    randomBtn.style.backgroundColor = "#7B886B";
  }
});

setupGrid(size);
