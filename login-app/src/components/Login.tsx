import React, { useState } from "react";
import store from "../store/index";
import { submitForm } from "../actions/login";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

interface loginProps {
  loginStatus: string;
}

function Login() {
  const history = useHistory();
  const { dispatch } = store;
  const { loginStatus } = useSelector((props: loginProps) => props);
  console.log(loginStatus);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(submitForm(user.email, user.password));
    history.push("/");
  };

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center mb-3">Login Form</h1>
        {loginStatus === "SUCCESS" ? (
          <div className="alert alert-success" role="alert">
            Login is Success
          </div>
        ) : loginStatus === "FAILED" ? (
          <div className="alert alert-danger" role="alert">
            Login is Failed
          </div>
        ) : (
          ""
        )}
        <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group row mb-3 d-flex justify-content-center">
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Here..."
                name="email"
                value={user.email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-3 d-flex justify-content-center">
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password Here..."
                name="password"
                value={user.password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
