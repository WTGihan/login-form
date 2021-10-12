import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas";
import loginReducer from "../reducers/login.reducer";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    loginReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
