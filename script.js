// 1

const gallery = document.querySelector(".gallery");
document.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "ArrowRight") {
    document.body.style.transform = "translateX(40px)";
  } else if (e.code === "ArrowLeft") {
    document.body.style.transform = "translateX(-20px)";
  } else {
    document.body.style.transform = "none";
  }
});

// 2

const inputNum = document.querySelector("input");
const renderBtn = document.querySelector("button[data-action='render']");
const destroyBtn = document.querySelector("button[data-action='destroy']");
const destroyDiv = document.querySelector("div#boxes");

function createBoxes(amount) {
  destroyDiv.innerHTML = "";
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.backgroundColor = `rgb(${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(Math.random() * (255 - 0) + 0)})`;
    createDiv.style.width = `${boxSize}px`;
    createDiv.style.height = `${boxSize}px`;
    destroyDiv.append(createDiv);
    boxSize += 10;
  }
}

function destroyBoxes() {
  destroyDiv.innerHTML = "";
}

renderBtn.addEventListener("click", () => {
  createBoxes(Number(inputNum.value));
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
