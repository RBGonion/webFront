const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = []; // 빈객체

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 입력값을 저장할 때, 삭제 정보를 저장할 때 사용하는 함수
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 의문의 코드, 생성된 li를 구분하는 코드라는데 잘 모르겠다
  li.remove(); // li제거 함수
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 이게 뭘까
  saveToDos(); // 목록 삭제 정보를 localStorage를 최신화하기 위한 saveToDos() 함수 실행
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // js에서 li태그 생성
  li.id = newTodo.id; // 밀리초id를 li의 id에 부여함
  const span = document.createElement("span"); // js에서 span태그 생성
  span.innerText = newTodo.text; // 입력값으로 span.innerText를 변경
  const button = document.createElement("button"); // js에서 button태그 생성
  button.innerText = "👻"; // button의 innerText 변경
  button.addEventListener("click", deleteToDo); // button의 클릭 이벤트 생성, deleteToDo() 실행
  li.appendChild(span); // span을 li에 연결
  li.appendChild(button); // button을 li에 연결
  toDoList.appendChild(li); // span과 button이 연결된  li를 id가 toDoList인 ul에 연결
}

function handleToDoSubmit(event) {
  event.preventDefault(); // 기본동작 제어
  const newTodo = toDoInput.value; // 변수를 지정해 줌으로써 값을 메모리에 저장한다
  toDoInput.value = ""; // input의 입력칸을 비운다
  const newTodoOBJ = {
    text: newTodo,
    id: Date.now(),
  }; // 앞서 저장한 입력값에 고유ID를 부여하고 객체로 묶어서 저장한다
  toDos.push(newTodoOBJ); // 객체로 묶은 값을 빈 배열에 저장
  paintToDo(newTodoOBJ); //인자가 newTodoOB인 paintToDo함수 실행
  saveToDos(); // 함수 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit); // submit시 이벤트 발동

const savedToDos = localStorage.getItem(TODOS_KEY); // 얜 뭘까??

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
