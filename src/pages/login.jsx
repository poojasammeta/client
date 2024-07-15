import React, { useState } from "react";
import "./login.css";
import { FaUser, FaLock } from "react-icons/fa";
import Register from "./register";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://server-deployment-mtre.onrender.com/userRoute/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data === "Success") {
          setIsLoggedIn(true);
        } else {
          alert(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegisterLinkClick = () => {
    setShowRegister(true);
  };

  return (
    <div className="wrapper">
      <h1 className="heading">Welcome to Flavor Hub</h1>
      <div className="box">
        {showRegister ? (
          <Register setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <div className="form-box-login">
            <form action="" onSubmit={handleLoginSubmit}>
              <h1 className="style3">Login</h1>
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
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
                <FaLock className="icon" />
              </div>

              <button type="submit" className="login-button">
                Login
              </button>
              <div className="register-link">
                <p>
                  Don't have an account?
                  <a href="#" onClick={handleRegisterLinkClick}>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
