import * as loginActions from "../constants/login.constants";

export const submitForm = (user: { email: string; password: string }) => {
  return {
    type: loginActions.LOGIN_USER,
    user: user,
    loginStatus: "PENDING",
  };
};

export const loginDetails = (loginStatus: string) => {
  return {
    type: loginActions.LOGIN_STATUS,
    loginStatus: loginStatus,
  };
};
