import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import { Provider } from "react-redux";
import configureStore from "./store/index.store";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
