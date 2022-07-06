import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Pagination from '../Pagination';
// import { getPostsBySearch } from "../../actions/posts";
import Trending from "../Trending/Trending.js";
import Blog from "../Blog/Blog.js";
import Wall from "../Wall/Wall.js";
import NewNavbar from "../Navbar/New Navbar";
import Modal from '../Modal/Modal'

import '../../App.css'
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({darkMode, setDarkMode}) => {

  document.title = 'ITER Connect | Home'
  const query = useQuery();
  const page = query.get("page") || 1;
  // const searchQuery = query.get("searchQuery");
  
  const [currentId, setCurrentId] = useState(0);

  const [modal, setModal] = useState(false);

  const selectModal = () => {
    setModal(!modal);
  }
  // const homeStyle = {
  //   backgroundColor: "#ececec"
  // }
  return (
    <div className="homeContainer">
      <NewNavbar darkMode={darkMode} setDarkMode={setDarkMode} selectModal={selectModal}/>
      <Modal
            currentId={currentId}
            setCurrentId={setCurrentId}
            displayModal={modal}
            closeModal={selectModal}
          />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Trending />
        {/* <span style={{ width: "50%", textAlign: "center" }}>ayush</span> */}
        <Wall setCurrentId={setCurrentId} selectModal={selectModal}/>
        {/* <div style={{display: "flex", flexDirection: "column", alignItems: "stretch"}}> */}
        <Blog />
        {/* <div><h2>Explore Clubs</h2></div> */}
        {/* </div> */}
        <Pagination page={page} />
      </div>
    </div>
  );
};

export default Home;
