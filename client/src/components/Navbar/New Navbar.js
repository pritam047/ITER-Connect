import React from "react";
import "./Navbar.css";
import memoriesLogo from "../../images/memories-Logo.png";
import homeIcon from "./icons/home.png";
import addPost from "./icons/addPost.png";
import explore from "./icons/explore.png";
import userProfileIcon from "./icons/user.png";
import { Link } from "react-router-dom";

function New_Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={memoriesLogo} />
        <p>ITER Connect</p>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search Here" />
      </div>
      <div className="header_icons">
        <Link to="/">
          <img src={homeIcon} />
        </Link>
        <img src={addPost} />
        <img src={explore} />
        <Link to="/profile">
          <img src={userProfileIcon} />
        </Link>
      </div>
    </div>
  );
}

export default New_Navbar;
