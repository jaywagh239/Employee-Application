import React, { useEffect, useState } from "react";
import "./login.css";
import ProfileImage from "../../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { userAuthentication } from "../../reducres/auth";
import {
  useGetAllUserQuery,
  useLazyGetAllEmployeeQuery,
  useSignUpMutation,
} from "../../api/employeeApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState({
    value: "",
    error: false,
    errMsg: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    errMsg: "",
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [errorPassMessages, setErrorPassMessages] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useGetAllUserQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.value || !password.value) {
      toast.error("Please enter email and password.");
      return;
    }
    if (
      data?.some((user) => {
        return (
          user.email === username.value && user.password === password.value
        );
      })
    ) {
      let obj = {
        isLoggedIn: true,
        user: {
          name: username.value,
          password: password.value,
        },
      };
      dispatch(userAuthentication({ obj }));
      toast.success("Login sucessfully.");
      setTimeout(() => {
        navigate("/dashboard");
      }, "5000");
    } else {
      toast.error("Login failed.");
    }

    // const response = await signUp({ name: "jayesh", password: "12345678" });
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <>
      <div className="App">
        <div className="card">
          <h1 className="title">Sign In</h1>
          {/* <p className="subtitle">
                    Please log in using your username and password!
                </p> */}
          <img src={ProfileImage} alt="horse" className="userPic" />
          <form onSubmit={handleSubmit}>
            <div className="inputs_container">
              <input
                type="text"
                placeholder="Username"
                value={username.value}
                onChange={(e) => {
                  if (!isValidEmail(e.target.value)) {
                    setUsername({
                      value: e.target.value,
                      error: true,
                      errMsg: "Email is invalid",
                    });
                  } else {
                    setUsername({
                      value: e.target.value,
                      error: false,
                      user: "",
                    });
                  }
                }}
              />
              {username.errMsg ? (
                <p className="error_msg">{username.errMsg}</p>
              ) : null}

              <input
                type="password"
                placeholder="Password"
                value={password.value}
                onChange={(e) =>
                  setPassword({
                    value: e.target.value,
                    error: false,
                    user: "",
                  })
                }
                minLength={4}
              />
            </div>

            <div className="passCheck">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1">Remember the password</label>
              <br></br>
            </div>

            <input type="submit" value="Log In" className="login_button" />
          </form>
          <div className="link_container">
            <a href="" className="small">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
// https://www.youtube.com/watch?v=5PfvoAj-SMk&t=453s
// https://github.com/trickjsprogram/rtk-query-starter
