//회원가입 엔드포인트 만들기
const http = require("http"); // http모듈 불러오기
const express = require("express"); // express모듈 불러오기
const { sendProducts } = require("./sendProducts2"); // sendProducts2파일 불러와서 구조분해 할당
const { createUser } = require("./user"); // user파일 불러와서 구조분해 할당

const app = express(); // express()의 컨벤션인 app 선언
app.use(express.json()); // js의 모든 객체를 json으로 변환(네트워크 통신에서 json만 쓰기 때문에 일괄적으로 변환하여 JSON.parse()의 과정을 줄여준다)
//express에서는 JSON.stringify()의 과정이 자동적으로 처리되기 때문에 생략된다

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

app.post("/signup", createUser); // createUser는 user.js 파일에서 module.exports된 함수이다
app.post("/login", (req, res) => {
  res.json("login success");
});
app.get("/products", sendProducts); // sendProducts는 외부 파일로 분리시킨 함수이며, require를 통해 불러왔다

const server = http.createServer(app); // createServer의 인수로 app으로 대체할 수 있게 된다

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
