import React, { useState, useEffect } from "react";
import store from "../store/index";
import { setLoginStatus } from "../actions/login";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

interface loginProps {
  loginStatus: boolean;
}

function Login() {
  const history = useHistory();
  const { loginStatus } = useSelector((props: loginProps) => props);

  console.log(loginStatus);
  const { dispatch } = store;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    status: false,
  });

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    let errorStatus: boolean;
    if (
      user.email.toLowerCase() === "wtgihan@gmail.com" &&
      user.password === "1234"
    ) {
      dispatch(setLoginStatus(true));
      errorStatus = false;
    } else {
      dispatch(setLoginStatus(false));
      errorStatus = true;
    }

    // reset inputs
    setError({ ...error, status: errorStatus });
    setUser({ ...user, email: "", password: "" });

    history.push("/");
  };

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center mb-3">Login Form</h1>
        {loginStatus ? (
          <div className="alert alert-success" role="alert">
            Login is Success
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            Login is Failed
          </div>
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
