//cardList.js
import React, { useState, useEffect } from "react";
import "./CardList.scss";
import Card from "./Card";

/**********************************************************
  
  현재는 카드 뷰 / 리스트 뷰가 구현되어있지만,
  중복되는 구조가 반복되어서 코드가 불필요하게 길어진 것을 확인 할 수 있습니다.
  
  오늘 배운 컴포넌트 재사용 개념을 활용해 반복되는 구조를 컴포넌트화 하고
  props에 따라서 다른 UI를 보여줄 수 있도록 구현해 주세요!

  - props로 전달할 데이터를 mock data 혹은 데이터를 담고 있는
    js파일을 생성해서 관리해 주세요!
  - 컴포넌트를 분리하면 그에 따라 css도 분리해주세요!

***********************************************************/

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/mockData.json")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="cardList">
      data = [{객체1} {객체2} {객체3}] elem = {객체1}
      elem = {객체2}
      elem = {객체3}
      {data.map((elem, idx) => (
        <Card
          key={idx}
          id={elem.id}
          url={elem.url}
          state={elem.state}
          title={elem.title}
          content={elem.content}
          type={elem.type}
          item={elem.itemList}
        />
      ))}
    </div>
  );
};

export default CardList;
