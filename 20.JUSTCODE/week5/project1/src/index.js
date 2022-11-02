import React from "react";
import ReactDOM from "react-dom/client";
import Artwork from "./artwork/Artwork";
import Join from "./joinLogin/Join.js";
import Router from "./Router.js";

import "./styles/reset.scss";
import "./styles/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
