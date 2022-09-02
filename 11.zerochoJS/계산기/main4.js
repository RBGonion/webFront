let numOne = "";
let operator = "";
let numTow = "";

const onClickNumber = (number) => {
  if (operator) {
    numtwo += number;
  } else {
    numOne += number;
  }
  $result.value += number;
};

document
  .querySelector("#inputButtons button:first-child")
  .addEventListener("click", onClickNumber("("));
document
  .querySelector("#inputButtons button:nth-child(2)")
  .addEventListener("click", onClickNumber(")"));
document
  .querySelector("#inputButtons button:nth-child(3)")
  .addEventListener("click", onClickNumber("%"));
document
  .querySelector("#inputButtons button:nth-child(4)")
  .addEventListener("click", onClickNumber("AC"));
document
  .querySelector("#inputButtons button:nth-child(5)")
  .addEventListener("click", onClickNumber("7"));
document
  .querySelector("#inputButtons button:nth-child(6)")
  .addEventListener("click", onClickNumber("8"));
document
  .querySelector("#inputButtons button:nth-child(7)")
  .addEventListener("click", onClickNumber("9"));
document
  .querySelector("#inputButtons button:nth-child(8)")
  .addEventListener("click", onClickNumber("/"));
document
  .querySelector("#inputButtons button:nth-child(9)")
  .addEventListener("click", onClickNumber("4"));
document
  .querySelector("#inputButtons button:nth-child(10)")
  .addEventListener("click", onClickNumber("5"));
document
  .querySelector("#inputButtons button:nth-child(11)")
  .addEventListener("click", onClickNumber("6"));
document
  .querySelector("#inputButtons button:nth-child(12)")
  .addEventListener("click", onClickNumber("*"));
document
  .querySelector("#inputButtons button:nth-child(13)")
  .addEventListener("click", onClickNumber("1"));
document
  .querySelector("#inputButtons button:nth-child(14)")
  .addEventListener("click", onClickNumber("2"));
document
  .querySelector("#inputButtons button:nth-child(15)")
  .addEventListener("click", onClickNumber("3"));
document
  .querySelector("#inputButtons button:nth-child(16)")
  .addEventListener("click", onClickNumber("-"));
document
  .querySelector("#inputButtons button:nth-child(17)")
  .addEventListener("click", onClickNumber("0"));
document
  .querySelector("#inputButtons button:nth-child(18)")
  .addEventListener("click", onClickNumber("."));
document
  .querySelector("#inputButtons button:nth-child(19)")
  .addEventListener("click", onClickNumber("="));
document
  .querySelector("#inputButtons button:last-child")
  .addEventListener("click", onClickNumber("+"));
