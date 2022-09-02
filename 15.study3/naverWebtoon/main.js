//죄측 인기순, 업데이트순, 조회순, 별점순 클릭 시 글자 색 변화,
//메인 이미지 변경(받아오 정보에 따라 나열되게 뱐걍헤애힘)
const todayMenu__leftSideBar__bottom = document.querySelector(
  "#todayMenu__leftSideBar__bottom"
);
const todayCategory1 = document.querySelector(
  "#todayMenu__leftSideBar__bottom span:first-child"
);
const todayCategory2 = document.querySelector(
  "#todayMenu__leftSideBar__bottom span:nth-child(2)"
);
const todayCategory3 = document.querySelector(
  "#todayMenu__leftSideBar__bottom span:nth-child(3)"
);
const todayCategory4 = document.querySelector(
  "#todayMenu__leftSideBar__bottom span:last-child"
);
const mainImg = document.querySelector("#mainImg");

todayMenu__leftSideBar__bottom.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === "SPAN") {
    todayCategory1.classList.remove("todayCategory");
    todayCategory2.classList.remove("todayCategory");
    todayCategory3.classList.remove("todayCategory");
    todayCategory4.classList.remove("todayCategory");
    event.target.classList.add("todayCategory");
  }
});

todayCategory1.addEventListener("click", () => {
  mainImg.style.backgroundColor = "black";
});
todayCategory2.addEventListener("click", () => {
  mainImg.style.backgroundColor = "blue";
});
todayCategory3.addEventListener("click", () => {
  mainImg.style.backgroundColor = "tomato";
});
todayCategory4.addEventListener("click", () => {
  mainImg.style.backgroundColor = "orange";
});
//
//좌우 스크롤 버튼
const leftSlideBtn = document.querySelector("#leftSlideBtn");
const rightSlideBtn = document.querySelector("#rightSlideBtn");
const mainImgBtn = document.querySelector("#mainImgBtn");
const mainImgBtn__item = document.querySelector("#mainImgBtn__item");
leftSlideBtn.addEventListener("click", () => {
  mainImgBtn__item.style.marginLeft -= 50;
});
rightSlideBtn.addEventListener("click", () => {
  mainImgBtn__item.style.marginRight += 50;
});

//mainImgBtn__items에 마우스를 올리면 메인 이미지 변경
//모든 이벤트가 mainImgBtn__items1에만 적옹됐는데
// >를 사용하여 직계 상속을 하니까 해결됨

const mainImgBtn__items1 = document.querySelector(
  "#mainImgBtn__item > div:first-child"
);
const mainImgBtn__items2 = document.querySelector(
  "#mainImgBtn__item > div:nth-child(2)"
);
const mainImgBtn__items3 = document.querySelector(
  "#mainImgBtn__item > div:nth-child(3)"
);
const mainImgBtn__items4 = document.querySelector(
  "#mainImgBtn__item > div:nth-child(4)"
);
const mainImgBtn__items5 = document.querySelector(
  "#mainImgBtn__item > div:nth-child(5)"
);
const mainImgBtn__items6 = document.querySelector(
  "#mainImgBtn__item > div:nth-child(6)"
);
const mainImgBtn__items7 = document.querySelector(
  "#mainImgBtn__item > div:nth-child(7)"
);
const mainImgBtn__items8 = document.querySelector(
  "#mainImgBtn__item > div:nth-child(8)"
);
const mainImgBtn__items9 = document.querySelector(
  "#mainImgBtn__item > div:last-child"
);
mainImgBtn__items1.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "red";
});
mainImgBtn__items2.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "yellow";
});
mainImgBtn__items3.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "skyblue";
});
mainImgBtn__items4.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "violet";
});
mainImgBtn__items5.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "yellow";
});
mainImgBtn__items6.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "red";
});
mainImgBtn__items7.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "yellow";
});
mainImgBtn__items8.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "blue";
});
mainImgBtn__items9.addEventListener("mouseenter", () => {
  mainImg.style.backgroundColor = "red";
});

//
//
const date = new Date();
const todayMenu__leftSideBar__top__date = document.querySelector(
  "#todayMenu__leftSideBar__top__date"
);

function currentTime() {
  todayMenu__leftSideBar__top__date.innerHTML = `${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.getHours()}시`;
}
currentTime();
setInterval(currentTime, 1000);
