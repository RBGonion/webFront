const table = document.createElement("table");
const div = document.createElement("div");

let OX = "X";
const field = [];
let winner = null;

function checkWinner(event) {
  if (
    field[event.target.parentNode.rowIndex][0].innerText === OX &&
    field[event.target.parentNode.rowIndex][1].innerText === OX &&
    field[event.target.parentNode.rowIndex][2].innerText === OX
  ) {
    winner = OX;
    return winner;
  }
  if (
    field[0][event.target.cellIndex].innerText === OX &&
    field[1][event.target.cellIndex].innerText === OX &&
    field[2][event.target.cellIndex].innerText === OX
  ) {
    winner = OX;
    return winner;
  }
  if (
    field[0][0].innerText === OX &&
    field[1][1].innerText === OX &&
    field[2][2].innerText === OX
  ) {
    winner = OX;
    return winner;
  }
  if (
    field[0][2].innerText === OX &&
    field[1][1].innerText === OX &&
    field[2][0].innerText === OX
  ) {
    winner = OX;
    return winner;
  }
}

function afterComputerInpput(event) {
  let checkedWinner = checkWinner(event);
  if (checkedWinner) {
    div.innerText = `${winner} 승리`;
    table.removeEventListener("click", clickEvent);
    return;
  }

  if (field.flat().every((e) => e.innerText)) {
    div.innerText = `무승부`;
    table.removeEventListener("click", clickEvent);
  }
}

function clickEvent(event) {
  if (event.target.innerText !== "") {
    return;
  }
  //  console.log(field[event.target.parentNode.rowIndex]); 이렇게 써서 undefined가 나왔다

  OX === "X" ? (OX = "O") : (OX = "X");

  if (OX === "O") {
    setTimeout(() => {
      const emptyCells = field.flat().filter((i) => !i.innerText);
      const randomCell =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      randomCell.innerText = "X";
      checkWinner(event);
      afterComputerInpput(event);
      OX = "X";
      console.log(checkWinner(event));
    }, 1000);
    checkWinner(event);
    afterComputerInpput(event);
  }

  event.target.innerText = OX;

  afterComputerInpput(event);
}

for (let i = 1; i <= 3; i++) {
  const cell = [];
  const tr = document.createElement("tr");
  for (let j = 1; j <= 3; j++) {
    const td = document.createElement("td");
    tr.append(td);
    cell.push(td);
  }
  field.push(cell);
  table.append(tr);
}
document.body.append(table);
document.body.append(div);

table.addEventListener("click", clickEvent);
