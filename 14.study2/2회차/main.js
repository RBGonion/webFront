const body = document.querySelector("body");
const header = document.querySelector("header");

const welcome = document.querySelector("#welcome");

const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  welcome.innerText = `hi ${value}`;
  form.classList.add("hidden");
});

const date = new Date();
console.log(date.getSeconds());

// const form = document.createElement("form");
// const input1 = document.createElement("input");
// const input2 = document.createElement("input");

// input1.attributes.NamedNodeMap.key("type") = "text";
// input2.attributes.NamedNodeMap.key("type") = "submit";

// body.append(form);

// form.append(input2);
// form.append(input1);

// console.dir(input1);
// console.dir(htmlinput);
