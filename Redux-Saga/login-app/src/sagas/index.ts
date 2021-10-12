import { all } from "redux-saga/effects";
import loginUser from "./login.saga";

function* rootSaga() {
  // console.log("Root Saga");
  yield all([loginUser()]);
}

export default rootSaga;
