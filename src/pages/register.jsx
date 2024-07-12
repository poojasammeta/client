import React, { useState } from "react";
import "./login.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    console.log("Submitting registration form with:", {
      username,
      email,
      password,
    });
    axios
      .post("http://localhost:4000/register", { username, email, password })
      .then((result) => {
        console.log("Registration successful:", result);
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log("Registration error:", err);
      });
  };

  const handleAgreeTermsChange = (event) => {
    setAgreeTerms(event.target.checked);
  };

  return (
    <div className="wrapper active">
      <h1 className="heading">Welcome to Flavor Hub</h1>
      <div className="box1">
        <div className="form-box-register">
          <form onSubmit={handleRegisterSubmit}>
            <h1 className="style3">Signup</h1>
            <div className="input-box">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forget">
              <label>
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={handleAgreeTermsChange}
                />
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="login-button"
              disabled={!agreeTerms}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
