import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import "./Navbar.css";

import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/connect1.png";
import homeIcon from "./icons/home.png";
import addPost from "./icons/addPost.png";
import explore from "./icons/explore.png";
// import userProfileIcon from "./icons/user.png";

import { getPostsBySearch } from "../../actions/posts";

import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';


function NewNavbar({ selectModal, darkMode, setDarkMode }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [search, setSearch] = useState('');
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  
  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }));
      navigate(`/posts/search?searchQuery=${search || 'none'}`, {replace: true});
  } else {
      navigate('/');
  }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
        searchPost();
    }
};

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
        <img src={memoriesLogo} alt="some img" height="45" />
        <Link to="/">
          <img src={memoriesText} alt="some img" height="55" />
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search Here" name="search" onKeyDown={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)}/>
        <span className="search_img" onClick={searchPost}>
          <img src="https://img.icons8.com/fluency-systems-regular/24/undefined/search--v1.png" 
          alt="searchbar"/>
        </span>
      </div>
       <div onClick={toggleDarkMode}>
          {darkMode ? <img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/36/000000/external-night-time-smashingstocks-glyph-smashing-stocks.png" alt="night"/> : <img src="https://img.icons8.com/office/36/000000/sun--v1.png" alt="day"/>}
      </div>
      {user ?
        (<div className="header_icons">
          
          <Link to="/">
            <img src={homeIcon} alt="home" />
          </Link>
          <img src={addPost} onClick={selectModal} alt="add" style={{ cursor: "pointer" }} />
          <img src={explore} alt="explore" />
          <Link to="/profile">
          <div className="header_avatar">
            <img src={user?.result?.imageUrl || "https://picsum.photos/seed/picsum/300/300"} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/seed/picsum/300/300" }} alt="avatar"/>
          </div>
            {/* <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
          </Link>
          <buttton type="button" className="button logout" onClick={logout}>Logout</buttton>
        </div>
        ) :
        <div>
          <Link to="/auth">
            <button type="button" className="button signin">LOGIN</button>
          </Link>
        </div>
      }
    </div>
  );
}

export default NewNavbar;
