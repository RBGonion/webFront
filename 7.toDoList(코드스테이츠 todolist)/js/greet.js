const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const getItem = localStorage.getItem("inputvalue");

function inputTextSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const inputValue = loginInput.value;
  localStorage.setItem("inputvalue", inputValue);
  paintGreetings(inputValue);
}

function paintGreetings(inputValue) {
  greeting.innerText = `hello ${getItem}`;
  greeting.classList.remove("hidden");
}

if (getItem === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", inputTextSubmit);
} else {
  paintGreetings(getItem);
}
