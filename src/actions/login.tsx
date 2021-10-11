import * as loginActions from "../constants/login";

export const submitForm = (useremail: string, password: string) => {
  return {
    type: loginActions.LOGIN_STATUS,
    loginStatus:
      useremail.toLowerCase() === "wtgihan@gmail.com" && password === "1234"
        ? "SUCCESS"
        : "FAILED",
  };
};
