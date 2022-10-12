//회원가입 엔드포인트 만들기
const http = require("http"); // http모듈 불러오기
const express = require("express"); // express모듈 불러오기
const { sendProducts } = require("./sendProducts2"); // sendProducts2파일 불러와서 구조분해 할당
const { createUser } = require("./user"); // user파일 불러와서 구조분해 할당

const app = express(); // express()의 컨벤션인 app 선언
app.use(express.json());
//app.use()는 미들웨어를 실행시키는 라우터이다
//express.json()은 요청시 들어오는 JSON문자열을 JS의 값이나 문자열로 변환하여 req.body로 넣어주는 미들웨어이다

app.get("/ping", (req, res) => {
  // 통신 테스트용 라우터
  res.json({ message: "/ pong" }); // 클라이언트로 응답 내용 전송, res.json은 res.send()와 유사하다
});

app.post("/signup", createUser); // createUser는 user.js 파일에서 module.exports된 함수이다
app.post("/login", (req, res) => {
  res.json("login success");
});
app.get("/products", sendProducts); // sendProducts는 외부 파일로 분리시킨 함수이며, require를 통해 불러온다

const server = http.createServer(app); // createServer의 인수로 기존의 콜백 부분을 app으로 대체할 수 있게 된다

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
