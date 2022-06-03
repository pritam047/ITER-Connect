import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { getPostsBySearch } from "../../actions/posts";
import Trending from "../Trending/Trending.js";
import Blog from "../Blog/Blog.js";
import Wall from "../Wall/Wall.js";
import New_Navbar from "../Navbar/New Navbar";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`,
        { replace: true }
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  // const handleAddChip = (tag) => setTags([...tags, tag]);
  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  // useEffect(() => {
  //     dispatch(getPosts());
  // }, [currentId, dispatch])

  return (
    <div style={{ backgroundColor: "#ececec" }}>
      <New_Navbar />
      <div
        style={{
          width: "100%",
          display: "flex",
          // textAlign: "justify",
          // backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <Trending />
        {/* <span style={{ width: "50%", textAlign: "center" }}>ayush</span> */}
        <Wall />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
