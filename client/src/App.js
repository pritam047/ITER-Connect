import React, { useState } from "react";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import CreateBlog from "./components/CreateBlog/CreateBlog";

const theme = createTheme();
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [darkMode, setDarkMode] = useState(false);

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
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Routes>
      <Route path="/" exact element={<Navigate to="/posts" replace />} />
      <Route path="/posts" exact element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
      <Route path="/auth" element={user ? <Navigate to="/" />: <Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createblog" element={<CreateBlog />} />
      </Routes>
      </div>
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
