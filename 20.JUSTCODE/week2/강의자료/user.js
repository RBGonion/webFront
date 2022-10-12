const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const createUser = (req, res) => {
  const user = req.body.data;
  // res.body는 프론트로부터 전달받은 정보가 저장되는 위치이다
  // data는 요청 시 서버로 전달된 JSON 문자열의 키 값이다

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  console.log("after: ", users);

  res.json({ message: "USER_CREATED" });
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이, response 객체의 json 메소드를 활용합니다.
};

module.exports = { createUser };

// postman에서 post, body, row, json 선택 후, 아래의 데이터로 /signup요청하기
// {
//   "data": {
//       "id": 3,
//       "name": "JH",
//       "email": "nkstory951@naver.com",
//       "password": "pass"
//   }
// }
