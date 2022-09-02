const sizespan = document.querySelector("#sizespan");

function sizespanfuc() {
  sizespan.innerText = `window.screen:  ${window.screen.width}, ${window.screen.height}
  window.outer: ${window.outerHeight}, ${window.outerWidth}
  window.inner: ${window.innerHeight}, ${window.innerWidth}
  documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
}

sizespanfuc();
window.addEventListener("resize", sizespanfuc);
