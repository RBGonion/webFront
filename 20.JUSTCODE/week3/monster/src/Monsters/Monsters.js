import "./Monsters.scss";
import React, { useState, useEffect } from "react";
import CardList from "./CardList";

function Monsters() {
  const [fetchData, setFetchData] = useState([]); // map을 쓰기 위한 state는 반듯이 초기값을 배열로 설정해야 한다
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  console.log(fetchData);

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input className="search" placeholder="Search" />
      {/* JSX에서 Object데이터를 그대로 렌더링 하려고 하면 에러가 발생한다. */}
      {/* 따라서 각 요소의 특정 attribute를 지정하여 원시값을 불러와야 한다 */}
      <CardList fetchData={fetchData} />
    </div>
  );
}

export default Monsters;
