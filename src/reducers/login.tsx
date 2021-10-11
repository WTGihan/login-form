import * as loginActions from "../constants/login";

export default function reducer(
  state = { loginStatus: "PENDING" },
  action: {
    type: string;
    loginStatus: boolean;
  }
): any {
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
