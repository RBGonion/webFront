import "./Main.scss";
import Feed from "./Feed";
import Header from "./Header";
import { useState, useEffect } from "react";

function App() {
  const [pidArr, setPidArr] = useState([]);

  useEffect(() => {
    fetch("/data/pidMockData.json")
      .then((res) => res.json())
      .then((res) => setPidArr(res.data));
  }, []);

  return (
    <>
      <Header />

      <main>
        {pidArr.map((feed) => (
          <Feed
            key={feed.id}
            likeCount={feed.likeCount}
            userName={feed.userName}
            content={feed.content}
            feedImage={feed.feedImage}
          />
        ))}
      </main>
    </>
  );
}

export default App;
