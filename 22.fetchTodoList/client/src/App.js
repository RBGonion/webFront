import { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  //react에서 상태 변화가 생기면 자동적으로 리랜더링이 발생한다
  //setter가 실행되면, state값이 변경되지 않아도 리액트는 상태 변화가 있다고 인식한다
  useEffect(() => {
    fetch("http://localhost:4000/api/todo")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  }, []);

  const onSubmitHander = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.value;
    fetch("http://localhost:4000/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        done,
      }),
    })
      .then((res) => res.json())
      .then((data) => setTodoList(data))
      .then((data) => console.log(todoList, "todolist"));
  };
  return (
    <div className="App">
      <form onSubmit={onSubmitHander}>
        <input name="text"></input>
        <input name="done" type="checkbox"></input>
        <input type="submit" value="추가"></input>
      </form>
      {todoList.map((todo) => {
        return (
          <div key={todo.id} style={{ display: "flex" }}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? "Y" : "N"}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
