const H2 = document.createElement("h2");
document.body.appendChild(H2);

function clockk() {
  const date = new Date();
  const HOURS = String(date.getHours()).padStart(2, "0");
  const MINUTES = String(date.getMinutes()).padStart(2, "0");
  const SECONDS = String(date.getSeconds()).padStart(2, "0");

  H2.innerText = `${HOURS}:${MINUTES}:${SECONDS}`;
}

clockk();
setInterval(clockk, 1000);
