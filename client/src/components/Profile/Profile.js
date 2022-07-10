import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import * as api from '../../api/index';
import "./Profile.css";
import defaultUser from "../../images/default-user.jpg";

import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import UserPost from './userPost/userPost'; 

function Profile() {
  document.title = "ITER Connect | Profile";

  const [userInfo, setUserInfo] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();
  // console.log(id);

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    async function fetchUserPosts(){
      try{
        const {data : userPosts} = await api.fetchPostsByUser(id);
        // console.log(data);
        setUserPosts(userPosts.data);
        }
        catch(e){
          if(e.response){
            console.log(e.response.data); // => the response payload 
            toast.error(`${e.response.data.message}`)
          }
    }
    
    }
    async function fetchUserinfo(){
      try{
        const {data : userInfo} = await api.getUserInfo(id);
        // console.log(data);
        setUserInfo(userInfo.data);
        }
        catch(e){
          if(e.response){
            console.log(e.response.data); // => the response payload 
            toast.error(`${e.response.data.message}`)
          }
    }
    }
    fetchUserinfo();
    fetchUserPosts();
  }, [id]);

  return (
    <>
      <div className="profile_container">
        <div className="info_container">

          <div className="image_div">
            <img className="profile_img" src={userInfo?.imageUrl || defaultUser} alt="profile" />
            { user?.result?._id === id &&
            <div>
              <CloudinaryUploadWidget user={user} />
            </div>
            }
          </div>

          <div className="profile_info">
            <span>{userInfo?.username || user?.result?.name}</span>
            <div className="profile_deets">
              <span>58 posts</span>
              <span>919 followers</span>
              <span>1354 following</span>
            </div>
            <div className="profile_bio">
              <p>{userInfo?.name}</p>
              <span className="bio">Email: {userInfo?.email}</span>
              <span className="bio">Class of '22</span>
              <span className="bio">
                Graphic Designer, Blogger and Web Developer.
              </span>
            </div>
          </div>

        </div>

        <div>Posts</div>
        <div className="user_posts_container">
        <ul className="user_post_cards">
          { !userPosts.length ? (<div>No Posts Yet</div>) : userPosts.map( (post, id) => (
            
            <UserPost post={post} key={id}/>
         
          ))
        }
        </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
