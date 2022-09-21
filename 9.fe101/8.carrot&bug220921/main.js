const main = document.querySelector("main");
main.style.position = "relative";

function makeElement(url, className) {
  for (let i = 0; i < 10; i++) {
    let randomWidth = Math.random() * parseInt(getComputedStyle(main).width);
    let randomHeight = Math.random() * parseInt(getComputedStyle(main).height);
    let div = document.createElement("div");
    div.style.backgroundImage = `url(${url})`;
    div.style.backgroundSize = "cover";
    if (className === "carrot") {
      div.style.width = "80px";
      div.style.height = "80px";
    } else if (className === "bug") {
      div.style.width = "50px";
      div.style.height = "50px";
    }
    div.style.position = "absolute";
    div.style.top =
      randomHeight / 2 +
      parseInt(getComputedStyle(main).height) / 2 -
      100 +
      "px";
    div.style.left = randomWidth + "px";
    div.className = `${className}`;
    main.append(div);
  }
}

function renuwalTime(count) {
  console.log(count);
  count--;
  document.querySelector("#time span").textContent = count;
}

document.querySelector("#startBtn").addEventListener("click", () => {
  let count = 10;
  makeElement("./img/carrot.png", "carrot");
  makeElement("./img/bug.png", "bug");
});

main.addEventListener("click", (event) => {
  if (event.target.className === "bug") {
    event.target.remove();
  } else if (event.target.className === "carrot") {
    event.target.remove();
  }
});

// 이정도만 구현하고 다시 강의 시청
