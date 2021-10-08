import * as loginActions from "../constants/login";

export function setUsername(username: string) {
  return {
    type: loginActions.SET_USERNAME,
    payload: {
      username: username,
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
