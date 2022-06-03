import React from "react";
import "./Register.css";
import memoriesLogo from "../../images/memories-Logo.png";
import { Link, useHistory } from "react-router-dom";

function Register() {
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
    <div className="container_register">
      <div className="center_registerdiv">
        <div className="image_register">
          <img src={memoriesLogo} />
          <span>ITER Connect</span>
        </div>
        <div className="register_text">
          <span>Sign up to see what ITER Students are upto...</span>
        </div>
        <div className="register_google">
          <button>Sign up using Google</button>
        </div>
        <div className="divider_register">
          <ColoredLine />
          OR
          <ColoredLine />
        </div>
        <div className="input_register">
          <input className="email" type="text" placeholder="email" />
          <input className="fullname" type="text" placeholder="fullname" />
          <input className="username" type="text" placeholder="username" />
          <input className="password" type="text" placeholder="password" />
        </div>
        <div className="register_policy">
          <span>
            By signing up, you are accepting our Terms, Data Policy and Cookies
            Policy.
          </span>
        </div>
        <div className="register_button">
          <button>Sign Up</button>
        </div>
        <Link to="/login">
          <div className="login_div">
            <span>Have an account? Log in</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Register;
