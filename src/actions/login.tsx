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
