import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import "./Login.css";
import memoriesLogo from "../../images/memories-Logo.png";

import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';

const initialState = { firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: '' };

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialState);

  // const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj;    // get properties like firstname, lastname, email, etc. of user
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  const googleError = (error) => {
    console.log(error);
    alert('Google Sign In was unsuccessful. Try again later');
  }

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
    // <form onSubmit={handleSubmit}>
    <div className="container_login">
      <div className="center_div">
        <div className="image_login">
          <img src={memoriesLogo} alt="sgdfhd" />
          <Link to='/' style={{ textDecoration: 'none' }}>
            <span>ITER Connect</span>
          </Link>
        </div>
        <div><h2 style={{ textAlign: "center" }}>{isSignup ? 'Sign up' : 'Sign in'}</h2></div>

        <form onSubmit={handleSubmit}>
          <div className="input_login">
            {isSignup && (
              <div style={{display: "flex", flexDirection: "column", flex: "1 0 45%"}}>
                <input className="username" placeholder="enter a cool username" name="username" label="Username" onChange={handleChange} />
                <input className="firstname" placeholder="First Name" name="firstName" label="First Name" onChange={handleChange} autoFocus />
                <input className="lastname" placeholder="Last Name" name="lastName" label="Last Name" onChange={handleChange} />
              </div>
            )}
            {/* <div className="input-group">
              <input className="input" name="email" onChange={handleChange} type="email" autoComplete="off"/>
              <label className="user-label">First Name</label>
          </div> */}
            <div style={{display: "flex", flexDirection: "column", flex: "1 0 45%"}}>
              <input className="email" placeholder="enter your email here" name="email" label="Email Address" onChange={handleChange} type="email" />
              {/* handleShowPassword={handleShowPassword} */}
              <input className="password" placeholder="enter password" name="password" label="Password" onChange={handleChange} type={showPassword ? 'text' : 'password'} />
              {isSignup && <input className="password" placeholder="repeat password to confirm" name="confirmPassword" label="Repeat Password" onChange={handleChange} type="password" />}
            </div>
          </div>
          <div className="login_button">
            <button type="submit">{isSignup ? 'Register' : 'Login'}</button>
          </div>
          <div className="divider_login">
            <ColoredLine />
            OR
            <ColoredLine />
          </div>
          <div className="login_google">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
              render={(renderProps) => (
                <button className="login-with-google-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  Google Sign In
                </button>
              )}
              buttonText="Google SignIn"
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
          </div>
          </form>
          {!isSignup && (<p className="forgot_password">Forgot Password?</p>)}
          <p className="forgot_password">
            <button className="login_switch" onClick={switchMode}>
              {isSignup ? (<div>Already have an account?<span style={{color: "#1183ca"}}>Sign In</span></div>) : (<div>Don't have an account?<span style={{color: "#5349d6"}}>Sign Up</span></div>)}
            </button>
          </p>
      </div>
    </div>
  );
}

export default Login;
