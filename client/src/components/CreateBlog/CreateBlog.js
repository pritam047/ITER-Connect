import React from "react"
import New_Navbar from "../Navbar/New Navbar"
import "./CreateBlog.css"
import { Checkbox } from "@mui/material"

function CreateBlog() {
    return (
        <div className="main_container_blog">
            <New_Navbar />
            <div style={{ display: "flex" }}>
                <div className="edit_container">
                    <div className="createBlog">
                        <span>Create a blog.</span>
                    </div>
                    <div className="title_container">
                        <input type="text" placeholder="enter title here..." />
                    </div>
                    <div className="body_container">
                        <textarea />
                    </div>
                </div>
                <div className="function_container">
                    <div className="draft_publish" >
                        <button type="submit">Save Draft</button>
                        <button type="submit" style={{ marginLeft: "1.5rem", backgroundColor: "#5865f2" }}>Publish</button>
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
        </div>
    )
}

export default CreateBlog;