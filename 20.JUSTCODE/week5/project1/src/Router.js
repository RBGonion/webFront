import { BrowserRouter, Routes, Route } from "react-router-dom";

import Artwork from "./artwork/Artwork";
import Join from "./joinLogin/Join";
import Login from "./joinLogin/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/user/signup" element={<Join />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
