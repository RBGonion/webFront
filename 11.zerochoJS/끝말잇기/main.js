const form = document.querySelector("form");
const input = document.querySelector("form input:first-child");
const preWord = document.querySelector("#preWord");
const $order = document.querySelector("#order");
const output = document.querySelector("footer span");

let order = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let word = input.value;
  let preWordInner = preWord.innerText;

  if (word.length === 3) {
    if (preWord.innerText === "현재 단어:") {
      preWord.innerText = `현재 단어: ${word}`;
      output.innerText = "O - 세글자 확인";
      order++;
    } else {
      if (preWordInner[preWordInner.length - 1] === word[0]) {
        preWordInner = `현재 단어: ${word}`;
        preWord.innerText = preWordInner;
        output.innerText = "딩동댕";
        order++;
      } else {
        output.innerText = "X - 끝말잇기에 실패했습니다";
      }
    }
  } else {
    output.innerText = "X - 세글자가 아닙니다";
  }
  if (order > 3) {
    order = 1;
  }
  $order.innerText = `번호: ${order}`;
});
