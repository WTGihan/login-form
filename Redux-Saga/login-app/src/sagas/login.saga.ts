import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN_USER, LOGIN_STATUS } from "../constants/login.constants";
import { login } from "../api/login.api";
// import { loginDetails } from "../actions/login.action";

interface payloadProps {
  type: string;
  user: { email: string; password: string };
  loginStatus: string;
}

function* handleLoginUser(payload: payloadProps) {
  try {
    // console.log("Login Saga", payload);
    const result: { loginStatus: string } = yield call(login, payload.user);
    // console.log("API Result=>", result);
    // can call directly to the reducer from this #Noted
    // yield put(loginDetails(result.loginStatus));
    yield put({ type: LOGIN_STATUS, loginStatus: result.loginStatus });
  } catch (error) {
    console.log("Error: ", error);
  }
}

export default function* loginUser() {
  // console.log("Login Saga");
  yield takeEvery(LOGIN_USER, handleLoginUser);
}
