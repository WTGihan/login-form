import * as loginActions from "../constants/login";

export function setUseremail(useremail: string) {
  return {
    type: loginActions.SET_USEREMAIL,
    payload: {
      useremail: useremail,
    },
  };
}

export function setPassword(password: string) {
  return {
    type: loginActions.SET_PASSWORD,
    payload: {
      password: password,
    },
  };
}

export function setLoginStatus(loginStatus: boolean) {
  return {
    type: loginActions.SET_LOGINSTATUS,
    payload: {
      loginStatus: loginStatus,
    },
  };
}

export const submitForm = (useremail: string, password: string) => {
  // let loginStatus :string;
  // if (useremail.toLowerCase() === "wtgihan@gmail.com" && password === "1234") {

  //   return {
  //     type: loginActions.LOGIN_STATUS,
  //     loginStatus: true,
  //   };
  // } else {
  //   return {
  //     type: loginActions.LOGIN_STATUS,
  //     loginStatus: false,
  //   };
  // }

  return {
    type: loginActions.LOGIN_STATUS,
    loginStatus:
      useremail.toLowerCase() === "wtgihan@gmail.com" && password === "1234",
  };
};
