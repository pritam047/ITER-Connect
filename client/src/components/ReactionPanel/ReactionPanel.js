import React, { useState } from "react";
import "./ReactionPanel.css";
// import like from "./like_icon.png"
import comment from "./comment_icon.png"
import share from "./share_icon.png"
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';

import { likePost, deletePost } from '../../actions/posts';
function ReactionPanel({ post, user }) {

  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const toggleShowComments = () => {
    setShowComments(!showComments);
  }

  const Likes = () => {
    if (post.likes?.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length}</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} </>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <div className="main_container_reaction">
      <div className="bottom_container">

        <div className="like_section">
          <Button onClick={() => dispatch(likePost(post._id))}><Likes /></Button>
          {/* <img src={like} alt="scfeaf"/> */}
        </div>

        <div className="comment_section">
          <img src="https://img.icons8.com/external-thin-kawalan-studio/24/undefined/external-comment-chat-thin-kawalan-studio-4.png" alt="scfeaf" onClick={toggleShowComments} />
          {/* <img src={comment} width='800' height='200' alt="scfeaf" onClick={toggleShowComments}/> */}
        </div>

        <div className="delete_section">
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&
            (
              <Button size="big" color="primary" onClick={() => dispatch(deletePost(post._id))} >
                <DeleteIcon fontSize="small" /> Delete
              </Button>
            )}
          {/* <img src={share} alt="scfeaf"/> */}
        </div>

      </div>

      {/* Comments box */}
      {showComments && (
        <div className="add_comment">
          <input type="text" placeholder="Add a comment" />
          <button type="submit">Post</button>
        </div>
      )
      }
    </div>
  )
}

export default ReactionPanel;