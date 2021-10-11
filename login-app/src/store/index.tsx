import { createStore } from "redux";
import reducer from "../reducers/login";

const store: any = createStore(reducer);

export default store;
