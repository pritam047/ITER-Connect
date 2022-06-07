import React from "react";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { Avatar } from '@mui/material';
import "./samplePost.css";
import userPost from "./user_post.png";
// import reyansh from "./square_image.jpeg";
import ReactionPanel from "../ReactionPanel/ReactionPanel";
import '../../App.css'

import moment from 'moment'

// import { likePost, deletePost } from '../../actions/posts';

const samplePost = ({ post, setCurrentId, selectModal }) => {
  // const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className="post_container">
      <div className="post_heading">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img className="userpic" src={userPost} alt="post pic" />
          {/* <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
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
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&
          (
            <div className="editPost">
              <img src="https://img.icons8.com/fluency-systems-regular/24/undefined/edit--v1.png"
                alt="edit"
                onClick={(e) => {
                  selectModal();
                  e.stopPropagation();
                  setCurrentId(post._id);
                }}
              />
            </div>
          )}
      </div>
      <div className="userPost">
        <div className="caption">{post.message}</div>
        <div className="tags">{post.tags.map((tag) => `#${tag} `)}</div>
        <div className="imagePost">
          {/* <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
          <img src={post.selectedFile} onError={(e) => { e.target.onerror = null; e.target.src = "https://dummyimage.com/600x400/f2e9f2/0011ff&text=404+Not+Found" }} alt="banner" />
        </div>
      </div>
      <ReactionPanel post={post} user={user} />
    </div>
  );
}

export default samplePost;
