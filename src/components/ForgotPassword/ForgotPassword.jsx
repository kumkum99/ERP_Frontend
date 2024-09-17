import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../App.css';


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // To manage form steps

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleSendCode = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/send-reset-code",
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage(response.data);
      setErrorMessage("");
      setStep(2); // Move to the next step
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/reset-password",
        { email, code, newPassword },
        { headers: { "Content-Type": "application/json" } }
      );
      setMessage(response.data);
      setErrorMessage("");

      // Show alert and navigate after user clicks "OK"
      alert("Your password has been reset successfully.");
      navigate("/login");

    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {step === 1 && (
        <form onSubmit={handleSendCode}>
          <div className="field">
            <label>Email Address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field btn">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Code"}
            </button>
          </div>
          {message && <p className="success-message">{message}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleResetPassword}>
          <div className="field">
            <label>Reset Code:</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="field btn">
           <button type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
          {message && <p className="success-message">{message}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;