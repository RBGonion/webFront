//22.09.29 계산기 구현, 소괄호 기능 미구현(소괄호 안의 연산식을 다시 btnCalculation함수로 넣어야 할 것 같은데 그 부분이 어렵다)

const display = document.querySelector("#result");
const ans = document.querySelector("#Ans");

let currentValue = "";
let currentOperator = "";
let waitArr = [];
let beforeCalculateValue = null;

function calculate(num1, num2) {
  switch (currentOperator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
  }
}

function btnCalculation(event) {
  if (currentValue === "") return;
  waitArr.push(currentValue);
  currentValue = "";
  // while (waitArr.includes("(")) {
  //   waitArr.splice(
  //     waitArr.indexOf("("),
  //     waitArr.indexOf(")") - waitArr.indexOf("(") + 1
  //   );
  // }
  while (
    waitArr.includes("*") ||
    waitArr.includes("/") ||
    waitArr.includes("%")
  ) {
    for (let i = 0; i < waitArr.length; i++) {
      if (waitArr[i] === "*") {
        currentOperator = "*";
        waitArr.splice(
          waitArr.indexOf("*") - 1,
          3,
          calculate(Number(waitArr[i - 1]), Number(waitArr[i + 1]))
        );
        break;
      } else if (waitArr[i] === "/") {
        currentOperator = "/";
        waitArr.splice(
          waitArr.indexOf("/") - 1,
          3,
          calculate(Number(waitArr[i - 1]), Number(waitArr[i + 1]))
        );
        break;
      } else if (waitArr[i] === "%") {
        currentOperator = "%";
        waitArr.splice(
          waitArr.indexOf("%") - 1,
          3,
          calculate(Number(waitArr[i - 1]), Number(waitArr[i + 1]))
        );
        break;
      }
    }
  }
  while (waitArr.includes("+") || waitArr.includes("-")) {
    for (let i = 0; i < waitArr.length; i++) {
      if (waitArr[i] === "+") {
        currentOperator = "+";
        waitArr.splice(
          waitArr.indexOf("+") - 1,
          3,
          calculate(Number(waitArr[i - 1]), Number(waitArr[i + 1]))
        );
        break;
      } else if (waitArr[i] === "-") {
        currentOperator = "-";
        waitArr.splice(
          waitArr.indexOf("-") - 1,
          3,
          calculate(Number(waitArr[i - 1]), Number(waitArr[i + 1]))
        );
        break;
      }
    }
  }
  ans.textContent = `${display.textContent} = `;
  display.textContent = waitArr[0];
  beforeCalculateValue = waitArr[0];
  currentValue = beforeCalculateValue;
  currentOperator = "";
  waitArr = [];
}
function btnNumber(event) {
  if (beforeCalculateValue !== null) {
    display.textContent = "";
    currentValue = "";
    beforeCalculateValue = null;
  }
  if (display.textContent === "0" && event.target.innerText !== ".")
    display.textContent = "";
  currentValue += event.target.textContent;
  display.textContent += event.target.textContent; // 왜 0은 계속 눌러도 화면에 0이 추가되지 않는 것일까
}
function btnOperator(event) {
  beforeCalculateValue = null;
  currentOperator = event.target.textContent;
  waitArr.push(currentValue);
  waitArr.push(event.target.textContent);
  currentValue = "";
  display.textContent += event.target.textContent;
}
// function btnRoundBracket(event) {
//   if (display.textContent === "0") display.textContent = "";
//   waitArr.push(event.target.textContent);
//   display.textContent += event.target.textContent;
//   console.log(waitArr);
// }
function btnCE(event) {
  display.textContent = "0";
  waitArr = [];
  currentValue = "";
  ans.textContent = `Ans = ${beforeCalculateValue}`;
  beforeCalculateValue = "";
}

function clickBtn(event) {
  if (event.target.textContent === "CE") {
    btnCE(event);
    return;
  } else if (event.target.textContent === "=") {
    btnCalculation(event);
    return;
  } else if (
    event.target.textContent === "0" ||
    event.target.textContent === "1" ||
    event.target.textContent === "2" ||
    event.target.textContent === "3" ||
    event.target.textContent === "4" ||
    event.target.textContent === "5" ||
    event.target.textContent === "6" ||
    event.target.textContent === "7" ||
    event.target.textContent === "8" ||
    event.target.textContent === "9" ||
    event.target.textContent === "."
  ) {
    btnNumber(event);
    return;
  } else if (
    event.target.textContent === "+" ||
    event.target.textContent === "-" ||
    event.target.textContent === "*" ||
    event.target.textContent === "/" ||
    event.target.textContent === "%"
  ) {
    btnOperator(event);
    return;
  } else if (
    event.target.textContent === "(" ||
    event.target.textContent === ")"
  ) {
    btnRoundBracket(event);
    return;
  }
}

document
  .querySelector("#btnRoundBracketLeft")
  .addEventListener("click", clickBtn);
document
  .querySelector("#btnRoundBracketRight")
  .addEventListener("click", clickBtn);
document.querySelector("#btn1").addEventListener("click", clickBtn);
document.querySelector("#btn2").addEventListener("click", clickBtn);
document.querySelector("#btn3").addEventListener("click", clickBtn);
document.querySelector("#btn4").addEventListener("click", clickBtn);
document.querySelector("#btn5").addEventListener("click", clickBtn);
document.querySelector("#btn6").addEventListener("click", clickBtn);
document.querySelector("#btn7").addEventListener("click", clickBtn);
document.querySelector("#btn8").addEventListener("click", clickBtn);
document.querySelector("#btn9").addEventListener("click", clickBtn);
document.querySelector("#btn0").addEventListener("click", clickBtn);
document.querySelector("#btnRest").addEventListener("click", clickBtn);
document.querySelector("#btnCE").addEventListener("click", clickBtn);
document.querySelector("#btnDivide").addEventListener("click", clickBtn);
document.querySelector("#btnMulti").addEventListener("click", clickBtn);
document.querySelector("#btnMinus").addEventListener("click", clickBtn);
document.querySelector("#btnPlus").addEventListener("click", clickBtn);
document.querySelector("#btnPeriod").addEventListener("click", clickBtn);
document.querySelector("#btnOperation").addEventListener("click", clickBtn);
