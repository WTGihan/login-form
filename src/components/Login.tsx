import React, { useEffect } from "react";
import store from "../store/index";
import { setUsername, setPassword } from "../actions/login";

function Login() {
  const { dispatch, getState } = store;
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue: string = event.target.value;
    if (event.target.name === "email") dispatch(setUsername(inputValue));
    if (event.target.name === "password") dispatch(setPassword(inputValue));
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log(getState());
  };

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center mb-3">Login Form</h1>
        <form className="mx-auto" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group row mb-3 d-flex justify-content-center">
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Here..."
                name="email"
                //   value={email}
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
                //   value={password}
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
