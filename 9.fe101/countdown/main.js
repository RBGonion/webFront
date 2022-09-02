//D-day
const countdown = () => {
  const countDate = new Date("May 17, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // 클락한 시점에서의 현재시간을 변수로 지정하고
  // 변수에 + 1000*n 밀리초를 더해주면
  // 내가 원하는 시간초만큼 카운트다운 기능을 만들 수 있을 것 같다

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

countdown();
setInterval(countdown, 1000);

//타임워치

const timewatch = () => {
  let minute = 0;
  let seconds = 0;
  let teMills = 0;
};
