const form = document.querySelector("#inputArea");
let input = document.querySelector("#inputArea #inputArea__input");

function makeRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
const randomNumber = String(makeRandomNumber(9999, 1000));
console.log(randomNumber);

function inputValue(event) {
  event.preventDefault();
  if (input.value === randomNumber) {
    console.log("홈런");
  }
  let strikeCount = 0;
  let ballCount = 0;
  for (let i = 0; i < 4; i++) {
    if (randomNumber[i] === input.value[i]) {
      strikeCount++;
    } else if (randomNumber.includes(input.value[i])) {
      ballCount++;
    }
  }
  if (strikeCount === 0 && ballCount === 0) {
    console.log("아웃");
  }
  console.log("strike " + strikeCount, "ball " + ballCount);
}

form.addEventListener("submit", inputValue);

// 자리수가 다르지만 숫자가 일치한다면 볼
// 자리수와 숫자가 일치한다면 스트라이크
// 숫자가 전부 불일치한다면 아웃
// 숫자와 자리수가 전부 일치한다면 홈런
