const body = document.querySelector("body");
let container = document.querySelector(".container");
const changeSizeBtn = document.querySelector("#change-size");

let size = 16;

let color = "#714955";

// container dimensions
const width = 800;
const height = 800;

container.style.width = `${width}px`;
container.style.height = `${height}px`;

// adds (size*size) number of divs to container
// flex properties set in css file
// set even listeners for all div elements in container
function setupGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${width / size}px`;

    square.addEventListener("mouseover", (e) => {
      if (e.buttons === 1) square.style.backgroundColor = color;
    });

    square.addEventListener("mousedown", (e) => {
      square.style.backgroundColor = color;
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

setupGrid(size);
