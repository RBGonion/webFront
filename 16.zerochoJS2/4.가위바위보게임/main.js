const computerHand = document.querySelector("#computerHand span");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const state = document.querySelector("#state");
const scroe = document.querySelector("#scroe");

computerHand.innerText = "🖐";
computerHand.style.fontSize = "60px";
let count = 0;

function result(event) {
  if (computerHand.innerText === event.target.innerText) {
    state.innerText = "무승부";
  } else if (
    (computerHand.innerText === "🖐" && event.target.innerText === "👆") ||
    (computerHand.innerText === "👆" && event.target.innerText === "👊") ||
    (computerHand.innerText === "👊" && event.target.innerText === "🖐")
  ) {
    state.innerText = "승리";
    count++;
  } else if (
    (computerHand.innerText === "👆" && event.target.innerText === "🖐") ||
    (computerHand.innerText === "👊" && event.target.innerText === "👆") ||
    (computerHand.innerText === "🖐" && event.target.innerText === "👊")
  ) {
    state.innerText = "패배";
    count--;
    //왜 else를 쓰면 동작하지 않는걸까??
  }
  score.innerText = `${count}점`;
}

function computerHandFunc() {
  if (computerHand.innerText === "🖐") {
    computerHand.innerText = "👊";
  } else if (computerHand.innerText === "👊") {
    computerHand.innerText = "👆";
  } else if (computerHand.innerText === "👆") {
    computerHand.innerText = "🖐";
  }
}

let setIntervalConst = setInterval(computerHandFunc, 50);
const intervalConstArr = [setIntervalConst];

function btnClick(event) {
  while (intervalConstArr.length !== 0) {
    clearInterval(intervalConstArr[0]);
    intervalConstArr.splice(0, 1);
    console.log(intervalConstArr);
  }
  setTimeout(() => {
    setIntervalConst = setInterval(computerHandFunc, 50);
    intervalConstArr.push(setIntervalConst);
  }, 1000);

  result(event);
}

paper.addEventListener("click", btnClick);
scissors.addEventListener("click", btnClick);
rock.addEventListener("click", btnClick);
