const result = document.querySelector("#result span");
const ans = document.querySelector("#Ans span");
let inputArray = [];
let curr = "";

function btnCeClick() {
  curr = "";
  num3 = null;
  ans.innerText = "Ans=0";
  result.innerText = "-";
  inputArray = [];
}

function btnOpClick(event) {
  let num3 = null;

  if (curr === "") {
    inputArray.pop();
  } else {
    inputArray.push(curr);
    curr = "";
  }

  while (inputArray.includes("*") || inputArray.includes("/")) {
    for (let i = 0; i < inputArray.length; i++) {
      let num1 = Number(inputArray[i - 1]);
      let num2 = Number(inputArray[i + 1]);

      //splice로 배열 index에 영향을 줘서 반복문이 제대로 실행되지 않는다
      if (inputArray[i] === "*" || inputArray[i] === "/") {
        if (inputArray[i] === "*") {
          num3 = num1 * num2;
          inputArray.splice(i - 1, 3, num3);
        } else {
          num3 = num1 / num2;
          inputArray.splice(i - 1, 3, num3);
        }
      }
    }
  }

  if (inputArray.includes("+") || inputArray.includes("-")) {
    num3 = null;
  }

  for (let i = 0; i < inputArray.length - 1; i++) {
    let num1 = Number(inputArray[i - 1]);
    let num2 = Number(inputArray[i + 1]);
    if (inputArray[i] === "+") {
      if (num3 === null) {
        num3 = num1 + num2;
      } else {
        num3 += num2;
      }
    }
    if (inputArray[i] === "-") {
      if (num3 === null) {
        num3 = num1 - num2;
      } else {
        num3 -= num2;
      }
    }
  }
  ans.innerText = result.innerText + "=";
  result.innerText = num3;
  num3 = null;
}

function btnClick(event) {
  //초기 화면의 0 제거
  if (result.innerText === "-") {
    result.innerText = "";
  }

  //화면출력값 갱신
  result.innerText += event.target.innerText;

  //숫자버튼 클릭 시 현재값 갱신
  if (
    event.target.innerText === "1" ||
    event.target.innerText === "2" ||
    event.target.innerText === "3" ||
    event.target.innerText === "4" ||
    event.target.innerText === "5" ||
    event.target.innerText === "6" ||
    event.target.innerText === "7" ||
    event.target.innerText === "8" ||
    event.target.innerText === "9" ||
    event.target.innerText === "0" ||
    event.target.innerText === "."
  ) {
    curr += event.target.innerText;
    console.log(curr);
  }

  //연산자버튼 클릭 시 배열에 현재값을 추가
  //현재값 초기화
  //배열에 연산자 버튼 추가
  if (
    event.target.innerText === "+" ||
    event.target.innerText === "-" ||
    event.target.innerText === "*" ||
    event.target.innerText === "/"
  ) {
    inputArray.push(curr);
    curr = "";
    inputArray.push(event.target.innerText);
  }
  console.log(inputArray);
}

//버튼 클릭시 btnClick, btnOpClick, btnCeClick 이벤트 발생
document.querySelector("#btn1").addEventListener("click", btnClick);
document.querySelector("#btn2").addEventListener("click", btnClick);
document.querySelector("#btn3").addEventListener("click", btnClick);
document.querySelector("#btn4").addEventListener("click", btnClick);
document.querySelector("#btn5").addEventListener("click", btnClick);
document.querySelector("#btn6").addEventListener("click", btnClick);
document.querySelector("#btn7").addEventListener("click", btnClick);
document.querySelector("#btn8").addEventListener("click", btnClick);
document.querySelector("#btn9").addEventListener("click", btnClick);
document.querySelector("#btn0").addEventListener("click", btnClick);
document.querySelector("#btnPlus").addEventListener("click", btnClick);
document.querySelector("#btnMinus").addEventListener("click", btnClick);
document.querySelector("#btnDivide").addEventListener("click", btnClick);
document.querySelector("#btnMulti").addEventListener("click", btnClick);
document.querySelector("#btnPeriod").addEventListener("click", btnClick);
document.querySelector("#btnOperation").addEventListener("click", btnOpClick);
document.querySelector("#btnCE").addEventListener("click", btnCeClick);
