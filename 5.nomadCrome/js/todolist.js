const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = []; // localStorage의 value값으로 저장할 배열

const savedToDos = localStorage.getItem(TODOS_KEY); // localStorage에 저장된 값을 불러오는 변수

if (savedToDos !== null) {
  // 만약 localStorage가 비어있지 않다면
  const parsedToDos = JSON.parse(savedToDos); // localStorage에 저장된 값을 parse를 통해 직렬화를 해제하는 변수
  toDos = parsedToDos; // localStorage에서 불러온 값을 toDos에 할당
  parsedToDos.forEach(paintToDo); // localStorage에서 불러온 배열/객체 값을, 요소 별로 paintToDo함수에 인자로 전달하여 실행한다
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 입력값을 저장할 때, 삭제 정보를 저장할 때 사용하는 함수
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 클릭된 버튼의 부모를 찾아서 변수로 등록해준다
  li.remove(); // 클릭된 버튼의 부모(li)를 제거
  toDos = toDos.filter((item) => item.id !== parseInt(li.id)); // localStorage에 저장할 배열을 삭제가 적용된 상태로 갱신해준다, filter를 사용하여 id가 일치하지 않는 요소들만 배열에 담는다
  saveToDos(); // 목록 삭제 정보를 localStorage를 최신화하기 위한 saveToDos() 함수 실행
}

function paintToDo(newTodoOBJ) {
  const li = document.createElement("li"); // js에서 li태그 생성
  li.id = newTodoOBJ.id; // 밀리초id를 li의 id에 부여함
  const span = document.createElement("span"); // js에서 span태그 생성
  span.innerText = newTodoOBJ.text; // 입력값으로 span.innerText를 변경
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
