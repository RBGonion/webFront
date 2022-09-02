const inputArea__input = document.querySelector("#inputArea__input");
const state = document.querySelector("#state");
const alertwindow = document.querySelector(".alertwindow");

const answer = [];
let ballCount = 0;
let strikeCount = 0;
let life = 10;

while (answer.length < 4) {
  let randomNumber = Math.floor(Math.random() * 9 + 1);
  if (!answer.includes(randomNumber)) {
    answer.push(randomNumber);
  }
}
console.log("answer", answer);
console.log("answerJoin", answer.join());

//요소 추가
function addState() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = `${inputArea__input.value} - strike:${strikeCount} ball:${ballCount} life:${life}`;

  state.append(li);
  li.append(span);

  strikeCount = 0;
  ballCount = 0;
}

//홈런, 아웃 체크, 라이프 갱신
function output() {
  if (strikeCount === 4) {
    console.log("homerun");
    alertwindow.classList.remove("hidden");
    alertwindow.innerHTML = "<span> homerun </span>";
  } else if (strikeCount === 0 && ballCount === 0) {
    console.log("out");
    life--;
  } else {
    console.log("strike", strikeCount);
    console.log("ball", ballCount);
    life--;
  }

  if (life === 0) {
    alertwindow.classList.remove("hidden");
    alertwindow.innerHTML = "<span> lose </span>";
  }

  console.log("life", life);
  addState();
}

//count 갱신
function checkCount() {
  for (let i = 0; i < inputArea__input.value.length; i++) {
    if (answer.includes(Number(inputArea__input.value[i]))) {
      if (
        answer.indexOf(Number(inputArea__input.value[i])) ===
        inputArea__input.value.indexOf(Number(inputArea__input.value[i]))
      ) {
        strikeCount++;
      } else {
        ballCount++;
      }
    }
  }
  output();
}

//유효성 검증
function inputVerify(event) {
  event.preventDefault();
  if (!isNaN(inputArea__input.value) && inputArea__input.value.length === 4) {
    checkCount();
  } else {
    console.log("dont text");
  }
}

//클릭 이벤트 생성
document.querySelector("#inputArea").addEventListener("submit", inputVerify);
