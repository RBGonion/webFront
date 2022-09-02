const divs = document.querySelector("#divs div:nth-child(4)");

function clickEvent(e) {
  console.log(divs.getBoundingClientRect());
  console.log(`page: ${e.pageX}, ${e.pageY}`);
  console.log(`client: ${e.clientX}, ${e.clientY}`);
}

divs.addEventListener("click", clickEvent);

const input1 = document.querySelector("form input:first-child");
const input2 = document.querySelector("form input:nth-child(2)");
const input3 = document.querySelector("form input:last-child");

input1.value = "100px 내리기";
input2.value = "100px로 이동";
input3.value = "지정 위치 이동";

input1.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollBy(0, 100);
});

input2.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 100);
});

input3.addEventListener("click", (e) => {
  e.preventDefault();
  let Y = divs.scrollIntoView();
  divs.scrollTo(0, Y);
});
