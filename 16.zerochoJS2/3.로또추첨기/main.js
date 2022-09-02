//1~45배열 생성
const originArr = Array(45)
  .fill()
  .map((a, b) => b + 1);

//원본 배열의 splice를 통해 무작위 배열 생성
const shuffleArr = [];
while (originArr.length > 0) {
  const splcieValue = originArr.splice(
    Math.floor(Math.random() * originArr.length),
    1
  );
  shuffleArr.push(splcieValue[0]);
}

//무작위 배열에서 맨 앞 7개 요소를 새로운 배열로 선언
const lotteryNumber = shuffleArr.slice(0, 7).sort((a, b) => a - b);

const section = document.querySelector("#lottery");
const bonus = document.querySelector("#bonus");

//배경색 부여 함수
function paintColor(div, i) {
  if (lotteryNumber[i] < 10) {
    div.style.backgroundColor = "red";
  } else if (lotteryNumber[i] < 20) {
    div.style.backgroundColor = "orange";
  } else if (lotteryNumber[i] < 30) {
    div.style.backgroundColor = "yellow";
  } else if (lotteryNumber[i] < 40) {
    div.style.backgroundColor = "blue";
  } else {
    div.style.backgroundColor = "green";
  }
}

//setTimeout을 지정하고 요소를 생성, 연결 하기
for (let i = 0; i < lotteryNumber.length; i++) {
  setTimeout(() => {
    const div = document.createElement("div");
    paintColor(div, i);
    div.innerHTML = `<span>${lotteryNumber[i]}</span>`;
    if (i !== 6) {
      section.append(div);
    } else {
      bonus.append(div);
    }
  }, (i + 1) * 1000);
}
