const circle = document.querySelector(".circle");
const heightLine = document.querySelector(".heightLine");
const widthLine = document.querySelector(".widthLine");
const coordinate = document.querySelector(".coordinate");

const imgDiv = document.querySelector(".targetImg");
const targetImg = document.createElement("img");
imgDiv.append(targetImg);
targetImg.src = "img/target.png";

/*
document.addEventListener("mousemove", (e) => {
  circle.classList.add("makecircle");
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";

  heightLine.classList.add("makeHeightLine");
  heightLine.style.left = e.clientX + "px";

  widthLine.classList.add("makeWidthLine");
  widthLine.style.top = e.clientY + "px";

  coordinate.classList.add("inputCoordinate");
  coordinate.innerText = `${e.clientX}, ${e.clientY}`;
  coordinate.style.left = e.clientX + "px";
  coordinate.style.top = e.clientY + "px";

  targetImg.style.left = e.clientX + "px";
  targetImg.style.top = e.clientY + "px";
});
*/

const targetRect = circle.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;
addEventListener("load", () => {
  document.addEventListener("mousemove", (e) => {
    let X = e.clientX;
    let Y = e.clientY;

    circle.classList.add("makecircle");
    circle.style.transform = `translate(${X - 18}px, ${Y - 18}px)`;

    heightLine.classList.add("makeHeightLine");
    heightLine.style.transform = `translateX(${X}px)`;

    widthLine.classList.add("makeWidthLine");
    widthLine.style.transform = `translateY(${Y}px)`;

    coordinate.classList.add("inputCoordinate");
    coordinate.innerText = `${e.clientX}, ${e.clientY}`;
    coordinate.style.left = e.clientX + "px";
    coordinate.style.top = e.clientY + "px";

    targetImg.style.left = e.clientX + "px";
    targetImg.style.top = e.clientY + "px";
  });
});
