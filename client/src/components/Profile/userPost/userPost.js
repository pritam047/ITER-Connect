import React from 'react'
import './userPost.css';

const UserPost = ({post}) => {
  return (
     
        <li className="cards_item">
      <div className="card">
        <div className="card_image">
            <img 
            src={post.selectedFile} 
            onError={(e) => { e.target.onerror = null; e.target.src = "https://dummyimage.com/600x400/f2e9f2/0011ff&text=404+Not+Found" }} 
            alt="picsum"
            />
        </div>
        <div className="card_content">
          <h2 className="card_title">{post.title}</h2>
          <p className="card_text">{post.message}</p>
          <p className="card_tags">{post.tags[0].length>0 && post.tags.map((tag) => `#${tag} `)}</p>
          <button className="user_post_btn card_btn">Read More</button>
        </div>
      </div>
    </li>

  )
}

export default UserPost;