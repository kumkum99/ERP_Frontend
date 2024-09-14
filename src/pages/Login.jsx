import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);  // New state for forgot password

  const handleLoginClick = () => {
    setIsLoginMode(true);
    resetForm();
  };

  const handleSignupClick = () => {
    setIsLoginMode(false);
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginType = isLoginMode ? "admin" : "employee";
    const apiUrl = isLoginMode
      ? `http://localhost:5000/api/admin/login?email=${email}&password=${password}`
      : `http://localhost:5000/api/employee/login?email=${email}&password=${password}`;

    try {
      const response = await axios.get(apiUrl);
      console.log("Response from API ", response);
      if (response.data === true) {
        if (loginType === "admin") {
          alert("Welcome to Admin Dashboard");
          window.location.href = "/adminDashboard";
        } else {
          alert("Welcome to Employee Dashboard");
          window.location.href = "/employeeDashboard";
        }
      } else {
        setErrorMessage("Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Login failed", error);
      if (error.response && (error.response.status === 401 || error.response.status === 404)) {
        setErrorMessage("Invalid credentials, please try again.");
      } else {
        setErrorMessage("An error occurred, please try again later.");
      }
    }
  };

  if (isForgotPassword) {
    return <ForgotPassword goBack={() => setIsForgotPassword(false)} />;
  }

  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLoginMode ? "login" : "signup"}`}>
            {isLoginMode ? "Admin Login" : "Employee Login"}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLoginMode}
              readOnly
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLoginMode}
              readOnly
            />
            <label
              htmlFor="login"
              className="slide login"
              onClick={handleLoginClick}
            >
              Admin
            </label>
            <label
              htmlFor="signup"
              className="slide signup"
              onClick={handleSignupClick}
            >
              Employee
            </label>
            <div
              className="slider-tab"
              style={{ left: isLoginMode ? "0%" : "50%" }}
            ></div>
          </div>

          <div className="form-inner">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="pass-link">
                <a href="#" onClick={() => setIsForgotPassword(true)}>Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="/signup">Signup now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;