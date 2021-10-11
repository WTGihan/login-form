import * as loginActions from "../constants/login";

export default function reducer(
  state = { loginStatus: false },
  action: {
    type: string;
    loginStatus: boolean;
  }
): any {
  // if (action.type === loginActions.SET_USEREMAIL)
  //   if (state === [])
  //     return [
  //       ...state,
  //       {
  //         useremail: action.payload.useremail,
  //         loginStatus: "",
  //       },
  //     ];
  //   else return { ...state, useremail: action.payload.useremail };
  // if (action.type === loginActions.SET_PASSWORD)
  //   if (state === [])
  //     return [
  //       ...state,
  //       {
  //         password: action.payload.password,
  //       },
  //     ];
  //   else return { ...state, password: action.payload.password };
  // if (action.type === loginActions.SET_LOGINSTATUS)
  //   if (state === [])
  //     return [
  //       ...state,
  //       {
  //         loginStatus: action.payload.loginStatus,
  //       },
  //     ];
  //   else return { ...state, loginStatus: action.payload.loginStatus };

  return state;
}
