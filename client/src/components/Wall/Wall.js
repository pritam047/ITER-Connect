import React from "react";
import { useSelector } from 'react-redux';

// import Post from './Post/Post';
import SamplePost from "../samplePost/samplePost.js";

import "./Wall.css";

function Wall({setCurrentId}) {

  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(posts);
  if(!posts.length && !isLoading) return 'No posts yet. We will be more than happy to see you create one.😃';

  return (
    <div className="container">
      {posts.map((post) => (
        <div className="post_container" key={post._id}>
        <SamplePost post={post} setCurrentId={setCurrentId}/>
        </div>
    
    ))}    
    </div>
  );
}


export default Wall;