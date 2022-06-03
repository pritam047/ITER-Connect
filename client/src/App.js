import React from "react";
// import { Container } from "@mui/material";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
// import Auth from "./components/Auth/Auth";
// import PostDetails from "./components/PostDetails/PostDetails";

import { createTheme, ThemeProvider } from "@mui/material/styles";
// import New_Navbar from "./components/Navbar/New Navbar.js";
// import Trending from "./components/Trending/Trending.js";
// import Blog from "./components/Blog/Blog.js";
// import Wall from "./components/Wall/Wall.js";
import {
  Navigate,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import CreateBlog from "./components/CreateBlog/CreateBlog";

const theme = createTheme();
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    // https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6

    // <BrowserRouter>
    //   <ThemeProvider>
    //     <Container>
    //       <Navbar />
    //       <Routes>
    //         <Route path="/" exact element={<Navigate to="/posts" replace />} />
    //         <Route path="/posts" exact element={<Home />} />
    //         <Route path="/posts/search" exact element={<Home />} />
    //         <Route path="/posts/:id" exact element={<PostDetails />} />
    //         <Route
    //           path="/auth"
    //           element={user ? <Navigate to="/" replace /> : <Auth />}
    //         />
    //       </Routes>
    //     </Container>
    //   </ThemeProvider>
    // </BrowserRouter>
    <BrowserRouter>
    <ThemeProvider theme={ theme }>
      <Routes>
      <Route path="/" exact element={<Navigate to="/posts" replace />} />
      <Route path="/posts" exact element={<Home />} />
      <Route path="/auth" element={user ? <Navigate to="/" />: <Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createblog" element={<CreateBlog />} />
      </Routes>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes> */}
      {/* <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/createblog" element={<CreateBlog />} />

      </Routes> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
