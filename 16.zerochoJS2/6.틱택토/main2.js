//컴퓨터가 가로, 세로로 이겼을 경우는 승리 안내가 나오지 않는다
//조건의 범위를 직접 지정해주면 해결되지만
//강의에서 의도한 범위 외의 작업이라 생각하여 처리하지 않는다
//(작업은 간단하지만 코드가 너무 길어져서 복습할 때 방해된다)

//게임이 끝나도 X칸 하나가 더 채워지는 것을 막을 방법을 모르겠다
//마찬가지로 이 부분도 강의에서 제대로 다루지 않는 부분이라
//다음에 확인하도록 하자

const field = document.querySelector("field");
const table = document.createElement("table");
const div = document.createElement("div");

const fieldArr = [];
let OX = "X";
let winner = false;

function checkWinner(event) {
  //랜덤으로 innerText값("X")을 넣었을 때
  //계속 승자 표시가 나오지않아서 몇시간을 헤맸는데
  //대각선은 조건이 충족돼서 조건문을 다시 살펴보니
  //가로와 세로줄의 경우 event.target에 대한 입력값을 확인하는 조건이어서
  //컴퓨터가 승리했을 경우 승리문구가 나오지 않았던 것이다
  //아 열받는다 진짜
  //오늘 하루를 이것 때문에 다 날렸다
  //OX의 값이 바뀌어서 조건이 틀린 줄 알고 계속 OX값을 어디서 바꿔줄지 고민하고 있었는데
  //하..
  if (
    fieldArr[event.target.parentNode.rowIndex][0].innerText === OX &&
    fieldArr[event.target.parentNode.rowIndex][1].innerText === OX &&
    fieldArr[event.target.parentNode.rowIndex][2].innerText === OX
  ) {
    winner = OX;
    div.innerText = `${winner}승리`;
    document.body.append(div);
    table.removeEventListener("click", clickBtn);
    return;
  }
  if (
    fieldArr[0][event.target.cellIndex].innerText === OX &&
    fieldArr[1][event.target.cellIndex].innerText === OX &&
    fieldArr[2][event.target.cellIndex].innerText === OX
  ) {
    winner = OX;
    div.innerText = `${winner}승리`;
    document.body.append(div);
    table.removeEventListener("click", clickBtn);
    return;
  }
  if (
    fieldArr[0][0].innerText === OX &&
    fieldArr[1][1].innerText === OX &&
    fieldArr[2][2].innerText === OX
  ) {
    winner = OX;
    div.innerText = `${winner}승리`;
    document.body.append(div);
    table.removeEventListener("click", clickBtn);
    return;
  }
  if (
    fieldArr[0][2].innerText === OX &&
    fieldArr[1][1].innerText === OX &&
    fieldArr[2][0].innerText === OX
  ) {
    winner = OX;
    div.innerText = `${winner}승리`;
    document.body.append(div);
    table.removeEventListener("click", clickBtn);
    return;
  }
}

function clickBtn(event) {
  if (event.target.innerText !== "") {
    return;
  }
  OX === "X" ? (OX = "O") : (OX = "X");
  event.target.innerText = OX;
  if (OX === "O") {
    setTimeout(() => {
      OX = "X";
      console.log(OX);
      const emptyArr = fieldArr.flat().filter((i) => !i.innerText);
      const randomElementOfEmptyArr =
        emptyArr[Math.floor(emptyArr.length * Math.random())];
      if (emptyArr.length !== 0) {
        randomElementOfEmptyArr.innerText = "X";
      }
      checkWinner(event);
      console.log(OX);
    }, 1000);
  }

  checkWinner(event);
  if (fieldArr.flat().every((i) => i.innerText)) {
    div.innerText = `무승부`;
    document.body.append(div);
    table.removeEventListener("click", clickBtn);
    return;
  }
}

for (let i = 0; i < 3; i++) {
  const tr = document.createElement("tr");
  const rowArr = [];
  for (let j = 0; j < 3; j++) {
    const td = document.createElement("td");
    tr.append(td);
    rowArr.push(td);
  }
  fieldArr.push(rowArr);
  table.append(tr);
}
document.body.append(table);
table.addEventListener("click", clickBtn);
