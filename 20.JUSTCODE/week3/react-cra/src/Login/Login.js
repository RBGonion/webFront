import "./Login.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <section id="loginPage">
        <div id="headBox">
          <span>justgram</span>
        </div>
        <div id="inputBox">
          <form id="inputBoxForm">
            <input
              type="text"
              id="inputId"
              placeholder="  전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              id="inputPassword"
              placeholder="  비밀번호"
            />
            <button disabled id="loginBtn">
              로그인
            </button>
            <span id="loginFailArelt" className="hidden">
              아이디 또는 비밀번호가 옳바르지 않습니다
            </span>
          </form>
        </div>
        <div id="forgetPassword">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </section>

      {/* <Link to="/main">메인</Link>
      <Link to="/login">로그인</Link> */}
    </Fragment>
  );
}

export default App;
