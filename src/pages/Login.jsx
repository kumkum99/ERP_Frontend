import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../App.css";
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate(); 
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
 
  // Function to handle admin login with static credentials
  const handleAdminLogin = async () => {
   
    const apiUrl = `https://erpunity-production.up.railway.app/api/admin/login?email=${email}&password=${password}`;

    try {
      const response = await axios.get(apiUrl);
      console.log("Response from API ", response);

      const isValid = response.data; // Expecting a boolean response

      if (isValid) {
        alert("Welcome to Admin Dashboard");
        navigate('/adminDashboard');
      } else {
        setErrorMessage("Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Select the Correct login type, please try again later.");
    }
  };

  // Function to handle employee login
  const handleEmployeeLogin = async () => {
    const apiUrl = `https://erpunity-production.up.railway.app/api/employee/login?email=${email}&password=${password}`;

    try {
      const response = await axios.get(apiUrl);
      console.log("Response from API ", response);

      const { isValid, Username, FirstName, LastName, Dob, Email, Phone, Password } = response.data;

      if (isValid) {
        localStorage.setItem("employeeName", Username); // Store the employee's name in local storage
        localStorage.setItem("employeeFirstName", FirstName);
        localStorage.setItem("employeeLastName", LastName);
        localStorage.setItem("employeeDob", Dob);
        localStorage.setItem("employeeEmail", Email);
        localStorage.setItem("employeePhone", Phone);
        localStorage.setItem("employeePassword", Password);
        
        alert(`Welcome ${Username} to Employee Dashboard`);
        navigate('/employeeDashboard');
      } else {
        setErrorMessage("Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Select the Correct login type, please try again later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      await handleAdminLogin();
    } else {
      await handleEmployeeLogin();
    }
  };

  if (isForgotPassword) {
   
    return <ForgotPassword goBack={() => setIsForgotPassword(false)} />;
  }

  return (
    <div className="main-container">
      <div className="wrapper">
        <a href="/" title="Go Back">
          <svg xmlns="http://www.w3.org/2000/svg" className="back-icon" viewBox="0 0 24 24">
            <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z" />
          </svg>
        </a>
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
                <Link to="/forgotPassword" onClick={() => setIsForgotPassword(true)}>Forgot password?</Link>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <Link to="/signup">Signup now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
