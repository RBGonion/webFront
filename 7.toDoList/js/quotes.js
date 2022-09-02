const quotes = [
  {
    text: "text1",
    author: "author1",
  },
  {
    text: "text2",
    author: "author2",
  },
  {
    text: "text3",
    author: "author3",
  },
  {
    text: "text4",
    author: "author4",
  },
  {
    text: "text5",
    author: "author5",
  },
  {
    text: "text6",
    author: "author6",
  },
];

const quote = document.querySelector("#quotess span:first-child");
const author = document.querySelector("#quotess span:last-child");

const randomquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${randomquote.text}`;
author.innerText = `${randomquote.author}`;
