const screen = document.querySelector("#screen");
screen.style.width = "300px";
screen.style.height = "200px";
screen.style.border = "black solid 1px";
screen.style.backgroundColor = "skyblue";

const alert = document.querySelector("#alert span");
alert.innerText = "화면을 클릭해주세요";

let currentTime = [];
const recordArray = [];
let count = 0;

function clickSkyblue() {
  screen.style.backgroundColor = "red";
  alert.innerText = "화면이 초록색이 되면 클릭해주세요";
  setTimeout(() => {
    currentTime.push(Date.now());
    screen.style.backgroundColor = "green";
    alert.innerText = "지금이야!";
  }, Math.floor(Math.random() * 10000) / 2 + 1000); // 1~5초 사이 후 setTimeout 실행
}

function clickRed() {
  console.log("lose");
}

function clickGreen() {
  if (count === 0) {
    currentTime.push(Date.now());
    const record = currentTime.sort((a, b) => b - a).reduce((a, b) => a - b);
    recordArray.push(record);
    currentTime = [];
    alert.innerText = "재시도하려면 화면을 클릭해주세요";
    count++;
  } else if (count === 1) {
    count = 0;
    screen.style.backgroundColor = "skyblue";
    alert.innerText = "화면을 클릭해주세요";
  }
  const first = document.querySelector("#record span:first-child");
  first.innerText = `1등: ${recordArray.sort((a, b) => a - b)[0]}ms`;
  const second = document.querySelector("#record span:nth-child(2)");
  second.innerText = `2등: ${recordArray.sort((a, b) => a - b)[1]}ms`;
  const third = document.querySelector("#record span:nth-child(3)");
  third.innerText = `3등: ${recordArray.sort((a, b) => a - b)[2]}ms`;
  const fourth = document.querySelector("#record span:nth-child(4)");
  fourth.innerText = `4등: ${recordArray.sort((a, b) => a - b)[3]}ms`;
  const fifth = document.querySelector("#record span:last-child");
  fifth.innerText = `5등: ${recordArray.sort((a, b) => a - b)[4]}ms`;
}

function firstClick() {
  if (screen.style.backgroundColor === "skyblue") {
    clickSkyblue();
  } else if (screen.style.backgroundColor === "red") {
    clickRed();
  } else if (screen.style.backgroundColor === "green") {
    clickGreen();
  }
}

screen.addEventListener("click", firstClick);
