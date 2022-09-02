const result = document.querySelector("#result span");
let displayResult = "";
let curr = "";
let num1;
let num2 = null;
let currOperator = "";

function operation(event) {
  if (!num1) {
    num1 = curr;
  } else {
    num2 = curr;
  }

  console.log("num1", num1);
  console.log("num2", num2);

  if (num1 && num2) {
    if (event.target.innerText === "*") {
      currOperator = "*";
      curr = parseInt(num1) * parseInt(num2);
    } else if (event.target.innerText === "/") {
      currOperator = "/";
      curr = parseInt(num1) / parseInt(num2);
    } else if (event.target.innerText === "+") {
      currOperator = "+";
      curr = parseInt(num1) + parseInt(num2);
    } else if (event.target.innerText === "-") {
      currOperator = "-";
      curr = parseInt(num1) - parseInt(num2);
    }
    num1 = curr;
    num2 = null;
  }
  console.log("curr", curr);
  curr = "";
}

//연산자를 누를 때,
//num1이 없다면 현재 curr num1에 할당
//num1이 있다면 현재 curr num2에 할당하고 num1과 num2의 연산을 실행하고 결과값을 num1에 할당

//버튼 클릭 이벤트, 단 연산자 클릭 시 operation 실행

function btnClick(event) {
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
    event.target.innerText === "0"
  ) {
    curr += event.target.innerText;
  }

  displayResult += event.target.innerText;
  result.innerText = displayResult;
  if (
    event.target.innerText === "*" ||
    event.target.innerText === "/" ||
    event.target.innerText === "+" ||
    event.target.innerText === "-"
  ) {
    operation(event);
  }
}

function btnCeClick() {
  displayResult = 0;

  curr = "";
  num1 = "";
  num2 = null;
  result.innerText = displayResult;
}

const ans = document.querySelector("#Ans");
let ansValue = "";
function btnOpClick(event) {
  ansValue = result.innerText;
  ans.innerText = `${ansValue} =`;

  if (num2 === null) {
    num2 = curr;
    if (currOperator === "*") {
      curr = parseInt(num1) * parseInt(num2);
    } else if (currOperator === "/") {
      curr = parseInt(num1) / parseInt(num2);
    } else if (currOperator === "+") {
      curr = parseInt(num1) + parseInt(num2);
    } else if (currOperator === "-") {
      curr = parseInt(num1) - parseInt(num2);
    }
    num1 = curr;
    num2 = null;
  }
  result.innerText = curr;
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
document.querySelector("#btnOperation").addEventListener("click", btnOpClick);
document.querySelector("#btnCE").addEventListener("click", btnCeClick);
