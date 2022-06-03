import React from "react";
import "./samplePost.css";
import userPost from "./user_post.png";
import reyansh from "./square_image.jpeg";
import ReactionPanel from "../ReactionPanel/ReactionPanel";

function samplePost() {
  return (
    <div className="post_container">
      <div className="post_heading">
        <img src={userPost} />
        <div className="userInfo">
          <span style={{ fontFamily: "Roboto, sans-serif" }}>
            Ayush Jhunjhunwala
          </span>
          <span style={{ opacity: "50%" }}>
            Computer Science Engineering, 4th Year
          </span>
          <span style={{ opacity: "50%" }}>1w</span>
        </div>
      </div>
      <div className="userPost">
        <div className="caption">Abcde</div>
        <div className="imagePost">
          <img src={reyansh} />
        </div>
      </div>
      <ReactionPanel />
    </div>
  );
}

export default samplePost;
