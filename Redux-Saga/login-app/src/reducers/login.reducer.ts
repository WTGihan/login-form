import * as loginActions from "../constants/login.constants";

export default function reducer(
  state = { loginStatus: "PENDING" },
  action: {
    type: string;
    // user: { email: string; password: string };
    loginStatus: string;
  }
): { loginStatus: string } {
  // console.log("Reducer Action Status=>", action.loginStatus);
  switch (action.type) {
    case loginActions.LOGIN_STATUS:
      return {
        ...state,
        loginStatus: action.loginStatus,
      };
    default:
      return state;
  }
}
