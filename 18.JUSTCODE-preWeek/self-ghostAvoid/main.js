const feild = document.querySelector("#feild");

const FEILD_WIDTH = parseInt(getComputedStyle(feild).width);
const FEILD_HEIGHT = parseInt(getComputedStyle(feild).height);

function makeHero() {
  const hero = document.createElement("div");
  hero.style.width = "35px";
  hero.style.height = "54px";
  const HERO_WIDTH = parseInt(getComputedStyle(hero).width);
  const HERO_HEIGHT = parseInt(getComputedStyle(hero).height);

  hero.style.backgroundImage = "url(./images/hero.png)";
  hero.style.position = "absolute";
  hero.style.top = `${FEILD_HEIGHT - 54}px`;
  hero.style.left = `${FEILD_WIDTH / 2}px`;
  feild.append(hero);
}
makeHero();
