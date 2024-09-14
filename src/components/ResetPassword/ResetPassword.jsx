import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import '../../App.css';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");

  const navigate = useNavigate(); // For redirecting after reset

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      setMessage("");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put("http://localhost:5000/api/reset-password", {
        token,
        password,
      });
      setMessage(response.data);
      setErrorMessage("");

      // Show alert and navigate after user clicks "OK"
      alert("Password reset successful!");
      navigate("/login");

    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="field">
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="field btn">
          <input
            type="submit"
            value={loading ? "Resetting..." : "Reset Password"}
            disabled={loading}
          />
        </div>
        {message && <p className="success-message">{message}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;