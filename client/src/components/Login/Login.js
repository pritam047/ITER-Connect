import React from "react";
import "./Login.css";
import memoriesLogo from "../../images/memories-Logo.png";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        width: "8rem",
        height: "0.1rem",
        border: "none",
        backgroundColor: "black",
        margin: "2rem",
      }}
    />
  );

  return (
    <div className="container_login">
      <div className="center_div">
        <div className="image_login">
          <img src={memoriesLogo} />
          <span>ITER Connect</span>
        </div>
        <div className="input_login">
          <input
            className="username"
            type="text"
            placeholder="username or email"
          />
          <input className="password" type="text" placeholder="password" />
        </div>
        <div className="login_button">
          <button type="submit">Log in</button>
        </div>
        <div className="divider_login">
          <ColoredLine />
          OR
          <ColoredLine />
        </div>
        <div className="login_google">
          <span>Log in using Google</span>
        </div>
        <p className="forgot_password">Forgot Password?</p>
        <Link to="/register">
          <div className="signup_div">
            <span>Don't have an account?</span>
            <span>Sign up</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
