import React, {useState, useEffect} from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import "./Navbar.css";
import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/connect1.png";

import homeIcon from "./icons/home.png";
import addPost from "./icons/addPost.png";
import explore from "./icons/explore.png";
import userProfileIcon from "./icons/user.png";

import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';


function NewNavbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/');
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className="header">
      <div className="logo">
        <img src={memoriesLogo} alt="some img"/>
        <Link to="/">
        <img src={memoriesText} alt="some img"/>
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search Here" />
      </div>
      {user ?
      (<div className="header_icons">
        <Link to="/">
          <img src={homeIcon} alt="some_img"/>
        </Link>
        <Link to="/">
        <img src={addPost} alt="some_img"/>
        </Link>
        <img src={explore} alt="some_img"/>
        <Link to="/profile">
          <img src={userProfileIcon} alt="some_img"/>
        </Link>
        <buttton onClick={logout}>Logout</buttton>
      </div>
      ):
      <div>
        <Link to="/auth">
        <button >Sign In</button>
        </Link>
      </div>
      }
    </div>
  );
}

export default NewNavbar;
