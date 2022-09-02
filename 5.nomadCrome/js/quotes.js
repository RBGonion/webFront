const quotes = [
  {
    quote: "첫 번째 명언",
    author: "첫 번째 저지",
  },
  {
    quote: "두 번째 명언",
    author: "두 번째 저자",
  },
  {
    quote: "세 번째 명언",
    author: "세 번째 저자",
  },
  {
    quote: "네 번째 명언",
    author: "네 번째 저자",
  },
  {
    quote: "다섯 번째 명언",
    author: "다섯 번째 저자",
  },
  {
    quote: "여섯 번째 명언",
    author: "여섯 번째 저자",
  },
  {
    quote: "일곱 번째 명언",
    author: "일곱 번째 저자",
  },
  {
    quote: "여덜 번째 명언",
    author: "여덜 번째 저자",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
