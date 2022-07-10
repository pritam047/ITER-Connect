import React, { useState } from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import Blogs from "./components/Blogs/Blogs";
import Clubs from "./components/Clubs/Clubs";

import WithNav from './WithNav';
import WithoutNav from './WithoutNav';
const theme = createTheme();
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const [darkMode, setDarkMode] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [modal, setModal] = useState(false);

  const selectModal = () => {
    setModal(!modal);
  }
  return (
    // https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/auth" element={user ? <Navigate to="/" /> : <Login />} />
          </Route>
          <Route element={<WithNav darkMode={darkMode} setDarkMode={setDarkMode} modal={modal} selectModal={selectModal} currentId={currentId} setCurrentId={setCurrentId}/>}>
            <Route path="/" exact element={<Navigate to="/posts" replace />} />
            <Route path="/posts" exact element={<Home setCurrentId={setCurrentId} selectModal={selectModal} />} />
            <Route path="/posts/search" exact element={<Home setCurrentId={setCurrentId} selectModal={selectModal} />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/createblog" element={user ? <CreateBlog /> : <Navigate to='/auth' />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/clubs" element={<Clubs />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>




  );
};

export default App;
