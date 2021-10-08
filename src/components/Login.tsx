import React, { useEffect } from "react";
import store from "../store/index";
import { setUseremail, setPassword, setLoginStatus } from "../actions/login";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const { dispatch, getState } = store;
  //   const { useremail, password, loginStatus } = getState();
  //   let loginEmail = "";
  //   let loginPassword = "";
  //   let loginUserStatus = "";

  //   store.subscribe(() => {
  //     const { useremail, password, loginStatus } = getState();
  //   });

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue: string = event.target.value;
    event.target.name === "email"
      ? dispatch(setUseremail(inputValue))
      : dispatch(setPassword(inputValue));
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    const { useremail, password } = getState();
    if (
      useremail.toLowerCase() === "wtgihan@gmail.com" &&
      password === "Hello@1998"
    ) {
      dispatch(setLoginStatus(true));
    } else dispatch(setLoginStatus(false));

    // reset inputs
    dispatch(setUseremail(""));
    dispatch(setPassword(""));

    history.replace("/");
  };

  console.log(getState());

  return (
    <div className="container  w-50 m-auto">
      <div className="py-4">
        <h1 className="text-center mb-3">Login Form</h1>
        {getState().loginStatus === true ? (
          <div className="alert alert-success" role="alert">
            Login is Success
          </div>
        ) : getState().loginStatus === false ? (
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
                value={getState().useremail}
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
                value={getState().password}
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
