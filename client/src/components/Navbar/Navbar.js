import React, { useEffect, useState } from 'react'
import  {AppBar, Toolbar, Typography, Avatar, Button} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import memoriesText from '../../images/connect1.png';
import memoriesLogo from '../../images/memories-Logo.png';

import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () =>{
      dispatch({ type: LOGOUT });
      navigate('/');
      setUser(null);
    }

    useEffect(() =>{
      const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

      setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
    <Link to="/" className={classes.brandContainer}>
    <img src={memoriesText} alt="icon" height="45" />
    <img className={classes.image} src={memoriesLogo} alt="icon" height="55" />
    </Link>
    <Toolbar className={classes.toolbar}>
        {user ? (
            <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ): (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
    </Toolbar>
    </AppBar>
  )
}

export default Navbar