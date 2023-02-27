import { Store } from "redux";
import { useDispatch } from "react-redux";

const initialState = {
  user: {
    inLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = (data) => {
  return {
    type: "LOG_OUT",
  };
};

const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

const chageNickname = {
  type: "CHANGE_NICKNAME",
  data: "boogicho",
};

// reducer는 이전 상태와 action으로 다음 상태를 만드는 함수를 의미한다.
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state.user,
        isLOggedIn: true,
        user: action.data,
      };

    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
  }
};

export default rootReducer;
