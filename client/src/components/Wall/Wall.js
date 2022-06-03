import React from "react";
import "./Wall.css";
import SamplePost from "../samplePost/samplePost.js";

function Wall() {
  return (
    <div className="container">
      <div className="post_container">
        <SamplePost />
      </div>
    </div>
  );
}

export default Wall;
