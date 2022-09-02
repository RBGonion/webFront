const body = document.querySelector("body");
const start_stop = document.querySelector("#start_stop");
const startBtn = document.querySelector(".start");
const itemSection = document.querySelector("#itemSection");
const alertWindow = document.querySelector("#alertWindow");
const alertSpan = document.querySelector("#alertSpan");
const alertButton = document.querySelector("#alertButton");
const time = document.querySelector("#time");
const carrotCount = document.querySelector("#counter");

const bodyRect = body.getBoundingClientRect();
const bodyRectHeight = bodyRect.height;
const bodyRectWidth = bodyRect.width;
const bodyHalfWidth = bodyRect.width / 2;
const bodyHalfHeight = bodyRect.height / 2;

const now = 0;

const alertAudio = new Audio();
alertAudio.src = "sound/alert.wav";
const bgAudio = new Audio();
bgAudio.src = "sound/bg.mp3";
const bugAudio = new Audio();
bugAudio.src = "sound/bug_pull.mp3";
const carrotAudio = new Audio();
carrotAudio.src = "sound/carrot_pull.mp3";
const WinAudio = new Audio();
WinAudio.src = "sound/game_win.mp3";

let limiteTime = 10;
const countdown = () => {
  limiteTime--;
  time.innerText = `00:0${limiteTime}`;
  if (limiteTime <= 0) {
    limiteTime = 10;
    bugClick();
    clearInterval(interval);
    bugAudio.play();
  }
};

function alertButtonClick() {
  location.reload();
}

function bugClick() {
  bugAudio.play();
  bgAudio.pause();
  alertWindow.style.display = "flex";
  alertSpan.innerText = "You Lose";
}

let count = 10;
function carrotClick(event) {
  carrotAudio.play();
  event.target.remove();
  count--;
  console.log(count);
  if (count === 0) {
    alertWindow.style.display = "flex";
    WinAudio.play();
    bgAudio.pause();
    clearInterval(interval);
  }
  carrotCount.innerText = count;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createItem() {
  for (let i = 0; i < 10; i++) {
    const carrot = document.createElement("img");
    carrot.setAttribute("src", "img/carrot.png");
    carrot.style.position = "absolute";
    let carrotRect = carrot.getBoundingClientRect();
    let randomCarrotTop = randomIntFromInterval(
      bodyHalfHeight,
      bodyRectHeight - 80
    );
    let randomCrrotLeft = randomIntFromInterval(0, bodyRectWidth - 80);
    carrot.style.top = `${randomCarrotTop}px`;
    carrot.style.left = `${randomCrrotLeft}px`;
    itemSection.append(carrot);
    carrot.addEventListener("click", carrotClick);

    const bug = document.createElement("img");
    bug.setAttribute("src", "img/bug.png");
    bug.style.position = "absolute";
    let bugRect = bug.getBoundingClientRect();
    let randomBugTop = randomIntFromInterval(
      bodyHalfHeight,
      bodyRectHeight - 80
    );
    let randomBugLeft = randomIntFromInterval(0, bodyRectWidth - 80);
    bug.style.top = randomBugTop + "px";
    bug.style.left = randomBugLeft + "px";
    itemSection.append(bug);
    bug.addEventListener("click", bugClick);
  }
}

function clickStopBtn() {
  alertWindow.style.display = "flex";
  alertSpan.innerText = "game is stopped";
}

function creatStopBtn() {
  const stopButton = document.createElement("button");
  stopButton.setAttribute("class", "start");
  start_stop.append(stopButton);
  stopButton.innerHTML = `
  <i class="fa-solid fa-stop"></i>
  `;
  stopButton.addEventListener("click", clickStopBtn);
}

let interval;
function start() {
  startBtn.remove();
  creatStopBtn();
  createItem();
  interval = setInterval(countdown, 1000);
  bgAudio.play();
}

startBtn.addEventListener("click", start);

alertButton.addEventListener("click", alertButtonClick);
