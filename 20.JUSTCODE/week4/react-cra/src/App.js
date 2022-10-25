import React, { useState, useEffect } from "react";
import Child from "./Child";

function App() {
  const [firstData, setFirstData] = useState([]);
  const [secondData, setSecondData] = useState({});

  //1. useEffect
  useEffect(() => {
    console.log("부모 컴포넌트 마운트 후");

    fetch("http://localhost:3001/data/lifecycleErrorData.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("부모 컴포넌트 fetch 완료");

        setFirstData(res.data);
      });

    return () => {
      // clean up 함수
      // unmount 될 때
    };
  }, []);

  //2. useEffect
  useEffect(() => {
    console.log("부모 컴포넌트 (리)렌더링 후");
  });

  console.log("부모 컴포넌트 (리)렌더링 전");

  return (
    <>
      <h1>Parent</h1>
      <Child childData={firstData} />
    </>
  );
}

export default App;
