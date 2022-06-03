import React from "react";
import "./ReactionPanel.css";
import like from "./like_icon.png"
import comment from "./comment_icon.png"
import share from "./share_icon.png"

function ReactionPanel() {
    return (
        <div className="main_container_reaction">
            <div style={{ display: "flex" }}>
                <div className="like_section">
                    <img src={like} />
                </div>
                <div className="comment_section">
                    <img src={comment} />
                </div>
                <div className="share_section">
                    <img src={share} />
                </div>
            </div>

            <div className="add_comment">
                <input type="text" placeholder="Add a comment" />
                <button type="submit">Post</button>
            </div>
        </div>
    )
}

export default ReactionPanel;