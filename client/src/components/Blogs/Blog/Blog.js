import React from 'react'
import moment from 'moment'

import './Blog.css';
const Blog = ({ blog }) => {
  return (
    // <div className='blog-container'>
    //     <div className='blog-card'>
    //         <h3>{blog.title}</h3>
    //         <small>{moment(blog.createdAt).fromNow()}</small>
    //         <img src={blog.image} alt="poster" className='blog-image'/>
    //         <p>{blog.body}</p>
    //     </div>
    // </div>
      <div className="card">
        <div className="card__header">
          <img src={blog.image} alt="card__image" className="card__image" width="600"/>
        </div>
        <div class="card__body">
          <span className="tag tag-blue">Technology</span>
          <h4>{blog.title}</h4>
          <p>{blog.body.substring(0,100)}...</p>
          <button className='read_button'>Read More</button>
        </div>
        <div className="card__footer">
          <div className="user">
            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image"/>
              <div className="user__info">
                <h5>{blog.name}</h5>
                <small>{moment(blog.createdAt).fromNow()}</small>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Blog;