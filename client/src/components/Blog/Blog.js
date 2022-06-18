import React from "react";
import "./Blog.css";
import addBlog from "./addBlog.png";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="blog_container">
      <div className="smaller_container">
          <div className="title_container">
          <Link to="/blogs">
            <p className="title_blog">Blogs</p>
        </Link>&nbsp;&nbsp;&nbsp;
        <Link to="/createblog">
            <img src={addBlog} alt="somepic"/>
          </Link>
          </div>
        <div className="blog_list">
          <div className="individual_blog" style={{ marginTop: "0rem" }}>
            <span className="blog_title">Blog Title</span>
            <span className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="individual_blog">
            <span className="blog_title">Blog Title</span>
            <span className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="individual_blog">
            <span className="blog_title">Blog Title</span>
            <span className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
          <div className="individual_blog">
            <span className="blog_title">Blog Title</span>
            <span className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
