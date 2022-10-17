function main() {
  return (
    <>
      {/* 헤더 */}
      <header className="header-wrapper">
        {/* 저스트그램 로고 */}
        <div className="logo-wrapper">
          <img className="logo-img" src="image/logo.png" alt="" width="25px" />
          <div className="logo-line"></div>
          <div className="logo-text">justgram</div>
        </div>
        {/* 검색 */}
        <div className="search-wrapper">
          <input className="search-box" type="text" placeholder="검색" />
        </div>
        {/* 오른쪽 메뉴 목록 */}
        <div className="menu-wrapper">
          <img
            className="menu-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt=""
          />
          <img
            className="menu-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt=""
          />
          <img
            className="menu-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt=""
          />
        </div>
      </header>
    </>
  );
}
export default main;
