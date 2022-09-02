const resultwindow = document.querySelector("#resultWindow span");
const calculbtn1 = document.querySelector("#inputButtons button:first-child");
const calculbtn2 = document.querySelector("#inputButtons button:nth-child(2)");
const calculbtn3 = document.querySelector("#inputButtons button:nth-child(3)");
const calculbtn4 = document.querySelector("#inputButtons button:nth-child(4)");
const calculbtn5 = document.querySelector("#inputButtons button:nth-child(5)");
const calculbtn6 = document.querySelector("#inputButtons button:nth-child(6)");
const calculbtn7 = document.querySelector("#inputButtons button:nth-child(7)");
const calculbtn8 = document.querySelector("#inputButtons button:nth-child(8)");
const calculbtn9 = document.querySelector("#inputButtons button:nth-child(9)");
const calculbtn10 = document.querySelector(
  "#inputButtons button:nth-child(10)"
);
const calculbtn11 = document.querySelector(
  "#inputButtons button:nth-child(11)"
);
const calculbtn12 = document.querySelector(
  "#inputButtons button:nth-child(12)"
);
const calculbtn13 = document.querySelector(
  "#inputButtons button:nth-child(13)"
);
const calculbtn14 = document.querySelector(
  "#inputButtons button:nth-child(14)"
);
const calculbtn15 = document.querySelector(
  "#inputButtons button:nth-child(15)"
);
const calculbtn16 = document.querySelector(
  "#inputButtons button:nth-child(16)"
);
const calculbtn17 = document.querySelector(
  "#inputButtons button:nth-child(17)"
);
const calculbtn18 = document.querySelector(
  "#inputButtons button:nth-child(18)"
);
const calculbtn19 = document.querySelector(
  "#inputButtons button:nth-child(19)"
);
const calculbtn20 = document.querySelector("#inputButtons button:last-child");

let calWindow = "";
let result = null;
let division = null;
let num1 = null;
let num2 = null;

function addOperation() {
  result = Number(num1) + Number(num2);
  num1 = result;
  resultwindow.innerText = result;
}
function minusOperation() {
  result = Number(num1) - Number(num2);
  num1 = result;
  resultwindow.innerText = result;
}
function multiOperation() {
  result = Number(num1) * Number(num2);
  num1 = result;
  resultwindow.innerText = result;
}
function divideOperation() {
  result = Number(num1) / Number(num2);
  num1 = result;
  resultwindow.innerText = result;
}

function operation() {
  num2 = resultwindow.innerText;
  if (division === "+") {
    addOperation();
  } else if (division === "-") {
    minusOperation();
  } else if (division === "*") {
    multiOperation();
  } else if (division === "/") {
    divideOperation();
  }
}

function add() {
  if (num1 === null) {
    num1 = calWindow;
    division = "+";
    calWindow = "";
    resultwindow.innerText = calWindow;
  } else {
    num2 = calWindow;
    division = "+";
    calWindow = "";
    addOperation();
    num2 = null;
  }
  division = "";
}

function minus() {
  if (num1 === null) {
    num1 = calWindow;
    division = "-";
    calWindow = "";
    resultwindow.innerText = calWindow;
  } else {
    num2 = calWindow;
    division = "-";
    calWindow = "";
    minusOperation();
    num2 = null;
  }
  division = "";
}
function multi() {
  if (num1 === null) {
    num1 = calWindow;
    division = "*";
    calWindow = "";
    resultwindow.innerText = calWindow;
  } else {
    num2 = calWindow;
    division = "*";
    calWindow = "";
    multiOperation();
    num2 = null;
  }
  division = "";
}
function divide() {
  if (num1 === null) {
    num1 = calWindow;
    division = "/";
    calWindow = "";
    resultwindow.innerText = calWindow;
  } else {
    num2 = calWindow;
    division = "/";
    calWindow = "";
    divideOperation();
    num2 = null;
  }
  division = "";
}

calculbtn1.addEventListener("click", (e) => {
  calWindow += "(";
  resultwindow.innerText = calWindow;
});

calculbtn2.addEventListener("click", (e) => {
  calWindow += ")";
  resultwindow.innerText = calWindow;
});

calculbtn3.addEventListener("click", (e) => {
  calWindow += "%";
  resultwindow.innerText = calWindow;
});

calculbtn4.addEventListener("click", (e) => {
  num1 = null;
  num2 = null;
  result = null;
  calWindow = "";
  resultwindow.innerText = calWindow;
});

calculbtn5.addEventListener("click", (e) => {
  calWindow += "7";
  resultwindow.innerText = calWindow;
});

calculbtn6.addEventListener("click", (e) => {
  calWindow += "8";
  resultwindow.innerText = calWindow;
});

calculbtn7.addEventListener("click", (e) => {
  calWindow += "9";
  resultwindow.innerText = calWindow;
});

calculbtn8.addEventListener("click", (e) => {
  divide();
});

calculbtn9.addEventListener("click", (e) => {
  calWindow += "4";
  resultwindow.innerText = calWindow;
});

calculbtn10.addEventListener("click", (e) => {
  calWindow += "5";
  resultwindow.innerText = calWindow;
});

calculbtn11.addEventListener("click", (e) => {
  calWindow += "6";
  resultwindow.innerText = calWindow;
});

calculbtn12.addEventListener("click", (e) => {
  multi();
});

calculbtn13.addEventListener("click", (e) => {
  calWindow += "1";
  resultwindow.innerText = calWindow;
});

calculbtn14.addEventListener("click", (e) => {
  calWindow += "2";
  resultwindow.innerText = calWindow;
});

calculbtn15.addEventListener("click", (e) => {
  calWindow += "3";
  resultwindow.innerText = calWindow;
});

calculbtn16.addEventListener("click", (e) => {
  minus();
});

calculbtn17.addEventListener("click", (e) => {
  calWindow += "0";
  resultwindow.innerText = calWindow;
});

calculbtn18.addEventListener("click", (e) => {
  calWindow += ".";
  resultwindow.innerText = calWindow;
});

calculbtn19.addEventListener("click", (e) => {
  operation();
});

calculbtn20.addEventListener("click", (e) => {
  add();
});
