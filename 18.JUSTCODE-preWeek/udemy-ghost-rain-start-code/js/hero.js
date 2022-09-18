const hero = document.querySelector("#hero");

document.addEventListener("keydown", (event) => {
  let heroLeftValue = parseInt(getComputedStyle(hero).left);
  if (event.key === "ArrowLeft" && heroLeftValue > 30) {
    //getComputedStyle(hero).left = "0px";
    heroLeftValue -= 10;
    hero.style.left = `${heroLeftValue}px`;
  } else if (event.key === "ArrowRight" && heroLeftValue < 470) {
    heroLeftValue += 10;
    hero.style.left = `${heroLeftValue}px`;
  }
});
