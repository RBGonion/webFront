const formtag = document.querySelector("#inputValueTest");
const inputtag = document.querySelector("#inputValueTest input");
const ul = document.querySelector(".formUL");

function deletebutton(event) {
  const deleted = event.target.parentElement;
  deleted.remove();
}

function paindTodo(inputvalue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = `${inputvalue}`;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deletebutton);

  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "X";
  ul.appendChild(li);
}

function getvalue(event) {
  event.preventDefault();
  const inputvalue = inputtag.value;
  inputtag.value = "";
  paindTodo(inputvalue);
}

formtag.addEventListener("submit", getvalue);
