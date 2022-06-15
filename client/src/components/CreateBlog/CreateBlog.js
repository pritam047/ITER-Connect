import React, { useState } from "react";
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NewNavbar from "../Navbar/New Navbar";
import Blogs from "../Blogs/Blogs";
import "./CreateBlog.css";

import { createBlog } from '../../actions/blogs';
function CreateBlog() {
    const [blogData, setBlogData] = useState({ title: '', body: '', image: '' });
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('profile'));
    
    const keyhandler = e => {
        setCount(e.target.value.length);
      };
    const clear = () => {
        // setCurrentId(0);
        setBlogData({ title: '', body: '', image: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBlog({ ...blogData, name: user?.result?.name }, navigate));
        clear();
    }

    return (
        <>
        <div className="main_container_blog">
            <NewNavbar />
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div style={{ display: "flex" }}>
                    <div className="edit_container">
                        <div className="createBlog">
                            <span>Create a blog.</span>
                        </div>
                        <div className="title_container">
                            <input type="text" placeholder="enter title here..." name="title" id="title"
                                value={blogData.title}
                                onChange={(e) => setBlogData({ ...blogData, title: e.target.value })} />
                        </div>
                        <div className="body_container">
                            <textarea
                                maxLength={800}
                                value={blogData.body}
                                onKeyUp={e => keyhandler(e)}
                                onChange={(e) => setBlogData({ ...blogData, body: e.target.value })}
                                rows="10" cols="84" placeholder="start your article here..." name="body" id="body" />
                            <br /><small style={{ textAlign: "right !important" }}>Max. 800 characters <span style={{marginLeft: "32rem"}}>{count}/800</span></small>
                        </div>
                        {/* <div style={{textAlign : "center"}}><small>Max. characters 800/800</small></div> */}
                        <div className="fileInput">
                            <FileBase type="file" multiple={false}
                                onDone={({ base64 }) => setBlogData({ ...blogData, image: base64 })} />
                        </div>
                    </div>
                    <div className="function_container">
                        <div className="draft_publish" >
                            {/* <button type="submit">Save Draft</button> */}
                            <button type="submit" style={{ marginLeft: "1.5rem", backgroundColor: "#5865f2", cursor: "pointer" }}>Publish</button>
                        </div>
                        <div className="blog_settings">
                            <span>Post Settings</span>
                            <div className="communication">
                                <input type="checkbox" />
                                <span>Allow Comments</span>
                            </div>
                            <div className="location">
                                <span>Location</span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            
        </div>
        <div className="blogs-container">
        <Blogs/>
    </div>
    </>
    )
}

export default CreateBlog;