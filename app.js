const container = document.querySelector("#container");

// container dimensions
width = 800;
height = 800;

container.style.width = `${width}px`;
container.style.height = `${height}px`;

grid = [];

let size = 16;

for (let i = 0; i < size * size; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = `${width / size}px`;

  square.addEventListener("mouseover", (e) => {
    if (e.buttons === 1) square.style.backgroundColor = "#00607a";
  });

  square.addEventListener("mousedown", (e) => {
    square.style.backgroundColor = "#00607a";
  });

  grid.push(square);
  container.appendChild(square);
}
