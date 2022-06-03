import React from "react";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import "./samplePost.css";
import userPost from "./user_post.png";
// import reyansh from "./square_image.jpeg";
import ReactionPanel from "../ReactionPanel/ReactionPanel";



import moment from 'moment'

// import { likePost, deletePost } from '../../actions/posts';

const samplePost = ({ post, setCurrentId }) => {
  // const dispatch = useDispatch();

  // const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className="post_container">
      <div className="post_heading">
        <img src={userPost} alt="post pic"/>
        <div className="userInfo">
          <span style={{ fontFamily: "Roboto, sans-serif" }}>
          {post.name}
          </span>
          <span style={{ opacity: "50%" }}>
            Computer Science Engineering, 4th Year
          </span>
          <span style={{ opacity: "50%" }}>{moment(post.createdAt).fromNow()}</span>
        </div>
      </div>
      <div className="userPost">
        <div className="caption">{post.message}</div>
        <div className="imagePost">
          <img src={post.selectedFile} alt="efgs"/>
        </div>
      </div>
      <ReactionPanel />
    </div>
  );
}

export default samplePost;
