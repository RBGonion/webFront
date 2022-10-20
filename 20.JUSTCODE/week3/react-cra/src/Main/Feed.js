import { useState } from "react";

function Feed() {
  const [commentArray, setCommentArray] = useState([
    {
      id: 1,
      content: "할게 너무 많다",
    },
  ]);

  const addComment = () => {};

  return (
    <>
      <section>
        <div className="pidHeader">
          <div className="pidHeader_leftBox">
            <img
              className="pidHeader_leftBox_img"
              src="/images/스크린샷 2022-10-04 오후 7.39.13.png"
              alt=""
            />
            <span className="pidHeader_leftBox_span">jung_hyen</span>
          </div>
          <div className="pidHeader_rightBox">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div className="pidPhoto"></div>
        <div className="pidMenubar">
          <div className="pidMenubar_leftBox">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-comment"></i>
            <i className="fa-solid fa-arrow-up"></i>
          </div>
          <div className="pidMenubar_rightBox">
            <i className="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <div className="pidComment">
          <div className="pidComment_like">
            <span>좋아요를 누른 사람이 없습니다</span>
          </div>
          <div className="pidComment_host">
            <span>
              <b>jung_hyen</b> 벌써 할로윈
            </span>
            <span>...더 보기</span>
          </div>
          <div className="pidComment_visit">
            <span>
              <b>yopi27</b> 할로윈의 기원을 아시나요
            </span>
            {commentArray.map((comment) => {
              return <li key={comment.id}>{comment.content}</li>;
            })}
          </div>
          <div className="pidComment_time">
            <span>42분 전</span>
          </div>
          <form className="pidComment_input" action="">
            <input
              className="pidComment_input_input"
              placeholder="   댓글 달기..."
              type="text"
            />
            <button className="pidComment_input_button">게시</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Feed;
