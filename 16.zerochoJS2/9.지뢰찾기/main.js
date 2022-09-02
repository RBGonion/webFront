const buttonBox = document.querySelector("#buttonBox");
const input1 = document.querySelector("#buttonBox input:first-child");
const input2 = document.querySelector("#buttonBox input:nth-child(2)");
const input3 = document.querySelector("#buttonBox input:nth-child(3)");
const gameFiled = document.querySelector("#gameFiled");
const timeDiv = document.querySelector("#timeDiv");
const table = document.createElement("table");
const innerValue = [];

function clickEvent(event) {
  if (event.target.innerText === "") {
    event.target.style.backgroundColor = "black";
  }
}

buttonBox.addEventListener("submit", (event) => {
  event.preventDefault();

  const input1Value = +input1.value;
  const input2Value = +input2.value;
  const input3Value = +input3.value;

  //input값에 따라 게임 필드 생성하기
  for (let i = 0; i < input1Value; i++) {
    const tr = document.createElement("tr");
    const cell = [];
    for (let j = 0; j < input2Value; j++) {
      const td = document.createElement("td");
      tr.append(td);
      cell.push(td);
    }
    table.append(tr);
    innerValue.push(cell);
  }
  //무작위 요소에 지뢰 심기
  for (let i = 0; i < input3Value; i++) {
    const emptyArr = innerValue.flat().filter((elem) => !elem.innerText);
    emptyArr[Math.floor(Math.random() * emptyArr.length)].innerText = "펑";
    //empty[random]에서 선택 된 요소는 td이다
    //각각의 td는 자신에 대한 정보를 가지고 있으므로
    //flat을 하고 td를 제어해 줘도 해당 칸에 변경사항이 적용된다
  }

  for (let i = 0; i < input1Value; i++) {
    for (let j = 0; j < input2Value; j++) {
      if (innerValue[i][j].innerText === "펑") {
        innerValue[i - 1]?.[j - 1].value += 1;
        //여기서 innerValue[i][j]가 지뢰라면
        //주변 8개 칸에 count를 올려준다
        //이 떄, 주변칸을 선택하는 과정에서 없는 칸을 선택하게 됐을 때 발생하는 오류를 해결해야한다
        //단순하게 없는 칸에 접근할 때는 undefined로 처리된다
        //하지만 undefined값에 또 다시 접근하려하면 에러가 발상핸다
        //따라서  ?.(옵셔널체이닝)으로 null이나 undefined값에 접근했을 때 에러가 발생하지 않게 하는 것이다
      }
    }
  }

  gameFiled.append(table);
  table.addEventListener("click", clickEvent);
  buttonBox.classList.add("hidden");
  timeDiv.classList.remove("hidden");
});
