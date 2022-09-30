const display = document.querySelector("#result");
const ans = document.querySelector("#Ans");

let currentValue = "";
let currentOperator = "";
let waitArr = [];
let beforeCalculateValue = null;
let bracketState = true;

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

function calculation(arr) {
  while (arr.includes("(")) {
    let arrInBracket = arr.slice(arr.indexOf("(") + 1, arr.indexOf(")") + 1);

    arr.splice(
      arr.indexOf("("),
      arr.indexOf(")") - arr.indexOf("(") + 1,
      calculation(arrInBracket)
    );
  }

  while (arr.includes("*") || arr.includes("/") || arr.includes("%")) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "*") {
        currentOperator = "*";
        arr.splice(
          arr.indexOf("*") - 1,
          3,
          calculate(Number(arr[i - 1]), Number(arr[i + 1]))
        );
        break;
      } else if (arr[i] === "/") {
        currentOperator = "/";
        arr.splice(
          arr.indexOf("/") - 1,
          3,
          calculate(Number(arr[i - 1]), Number(arr[i + 1]))
        );
        break;
      } else if (arr[i] === "%") {
        currentOperator = "%";
        arr.splice(
          arr.indexOf("%") - 1,
          3,
          calculate(Number(arr[i - 1]), Number(arr[i + 1]))
        );
        break;
      }
    }
  }
  while (arr.includes("+") || arr.includes("-")) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "+") {
        currentOperator = "+";
        arr.splice(
          arr.indexOf("+") - 1,
          3,
          calculate(Number(arr[i - 1]), Number(arr[i + 1]))
        );
        break;
      } else if (arr[i] === "-") {
        currentOperator = "-";
        arr.splice(
          arr.indexOf("-") - 1,
          3,
          calculate(Number(arr[i - 1]), Number(arr[i + 1]))
        );
        break;
      }
    }
  }
  return arr[0];
}

function btnCalculation(event) {
  if (currentValue === "" && bracketState) return;
  bracketState = true;
  if (currentValue) waitArr.push(currentValue);
  currentValue = "";

  ans.textContent = `${display.textContent} = `;
  display.textContent = calculation(waitArr);
  beforeCalculateValue = calculation(waitArr);
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
  if (currentValue) waitArr.push(currentValue);
  waitArr.push(event.target.textContent);
  currentValue = "";
  display.textContent += event.target.textContent;
}

function btnRoundBracket(event) {
  if (display.textContent === "0") display.textContent = "";
  waitArr.push(event.target.textContent);
  display.textContent += event.target.textContent;
}

function btnRoundBracketRight(event) {
  waitArr.push(currentValue);
  waitArr.push(event.target.textContent);
  currentValue = "";
  display.textContent += event.target.textContent;
  bracketState = false;
}

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
  } else if (event.target.textContent === "(") {
    btnRoundBracket(event);
    return;
  } else if (event.target.textContent === ")") {
    btnRoundBracketRight(event);
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
