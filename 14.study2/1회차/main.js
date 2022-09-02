const box1 = document.querySelector("#box1");

function change() {
  box1.classList.toggle("changeColor");
}

box1.addEventListener("click", change);
