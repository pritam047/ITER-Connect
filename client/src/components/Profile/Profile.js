import React from "react";

import "./Profile.css";
import defaultUser from "../../images/default-user.jpg";

import CloudinaryUploadWidget from "../CloudinaryUploadWidget";

function Profile() {
  document.title = "ITER Connect | Profile";
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div>
      <div className="profile_container">
        <div className="info_container">

          <div className="image_div">
            <img className="profile_img" src={user?.result?.imageUrl || defaultUser} alt="profile" />
            <div>
              <CloudinaryUploadWidget user={user} />
            </div>
          </div>

          <div className="profile_info">
            <span>{user?.result?.username || user?.result?.name}</span>
            <div className="profile_deets">
              <span>58 posts</span>
              <span>919 followers</span>
              <span>1354 following</span>
            </div>
            <div className="profile_bio">
              <p>{user?.result.name}</p>
              <span className="bio">Email: {user?.result.email}</span>
              <span className="bio">Class of '22</span>
              <span className="bio">
                Graphic Designer, Blogger and Web Developer.
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
