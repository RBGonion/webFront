import React, { useState, useRef, Fragment } from "react";
import "./Main.scss";
import Feed from "./Feed";

function App() {
  return (
    <Fragment>
      <header>
        <div className="header_leftBox">
          <i className="fa-brands fa-instagram"></i>
          <div className="divider"></div>
          <span>justagram</span>
        </div>
        <div className="header_centerBox">
          <form>
            <input type="text" />
          </form>
        </div>
        <div className="header_rightBox">
          <i className="fa-regular fa-compass"></i>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-bookmark"></i>
        </div>
      </header>
      <main>
        <Feed />
        <Feed />
      </main>
    </Fragment>
  );
}

export default App;
