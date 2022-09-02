const BGRimg = document.createElement("img");
document.body.appendChild(BGRimg);

const imglist = ["0.jpeg", "1.jpeg", "2.jpeg"];
const randomvariable = Math.floor(Math.random() * imglist.length);

BGRimg.src = `img/${randomvariable}.jpeg`;
