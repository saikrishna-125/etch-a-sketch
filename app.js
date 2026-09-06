const container = document.querySelector("#container");

width = 800;
height = 800;

container.style.width = `${width}px`;
container.style.height = `${height}px`;

grid = [];

let size = 32;

for (let i = 0; i < size * size; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = `${width / size}px`;
  grid.push(square);
  container.appendChild(square);
}
