import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

import reducer from "../reducers/index";

const configureStore = () => {
  const store = createStore(reducer);
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "boogicho",
  });
};

const wrapper = createWrapper(configureStore, {
  debub: process.env.NODE_ENV === "development",
});

export default wrapper;
