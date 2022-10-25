import React, { useEffect } from "react";

function Child(props) {
  useEffect(() => {
    console.log("자식 컴포넌트 마운트 후");
  }, []);

  useEffect(() => {
    console.log("자식 컴포넌트 (리)렌더링 후");
  });

  console.log("자식 컴포넌트 (리)렌더링 전");

  return <h1>Child is here!!</h1>;
}

export default Child;
