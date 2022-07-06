import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Loader/Loader.jsx';
import { fetchBlogs } from '../../actions/blogs';

import "./Blog.css";
import addBlog from "./addBlog.png";
function Blog() {

  const { blogs, isLoading } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    isLoading ? <Loader /> : (
      <div className="blogs__house" style={{ display: "flex", flexDirection: "column" }}>
        <div className="clubs-home-container btn-1">
          <h2><Link to='/clubs' style={{ textDecoration: "none" }}>Explore Clubs</Link></h2>
        </div>
        <div className="blog_container">
          <div className="smaller_container">

            <div className="title_container">
              <p className="title_blog">Blogs</p>
              <Link to="/createblog">
                <img src={addBlog} alt="somepic" />
              </Link>
            </div>
            {blogs.slice(0, 4).map((blog) => (
              <div className="blog_list" key={blog.id}>
                <div className="individual_blog" style={{ marginTop: "0rem" }}>
                  <span className="blog_title">{blog.title}</span>
                  <span className="blog_description">
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                    {blog.body.substring(0, 90)}
                  </span>
                </div>
              </div>
            ))}

            <div style={{ float: "right", marginRight: "1rem" }}>
              <Link to="/blogs" style={{ textDecoration: "none" }}>
                <button className="explore-blogs-btn" type="button">
                  <span>Read More</span>
                  <svg width="24" height="24" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    )
  );
}

export default Blog;
