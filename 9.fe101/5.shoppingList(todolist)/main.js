const listDiv = document.querySelector("#listDiv");
const form = document.querySelector("#inputText");
const input = document.querySelector("#inputText input");
const section = document.querySelector("section");
const testBitton = document.querySelector("#testButton");

function Delete(e) {
  const li = e.target.parentElement;
  li.remove();
}

function makeList(e) {
  e.preventDefault();

  const li = document.createElement("li");
  li.classList.add("testClass");
  const span = document.createElement("span");
  span.innerText = input.value;
  const button = document.createElement("button");
  button.innerText = "🗑";

  if (input.value !== "") {
    input.value = "";
    listDiv.append(li);
    li.append(span);
    li.append(button);

    li.scrollIntoView();

    button.addEventListener("click", Delete);
  }
}

form.addEventListener("submit", makeList);
testButton.addEventListener("click", makeList);

//script로 파일 연결할 때 head에 넣고 defer이나 load안써주면 에러가 난다
//input에 이벤트 넣고 싶을 때는 input의 부모form태그에 이벤트를 줘야한다
//innerHTML은 ""안에 HTML태그를 처음부터 써주고 값을 할당해주면 된다.
//브라우저가 value를 못찾아서 한시간을 날렸는데 querySelector로 변수 지정할 때 오타가있었다
//li.classList.add("testClass");로 클래스 주기
//const 변수명 = event.target.parentElement; 로 부모요소 찾기
//변수명.remove(); 찾은요소 제거하기
