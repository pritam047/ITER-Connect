import React from "react";
import "./Profile.css";
import New_Navbar from "../Navbar/New Navbar";
import profileImage from "./sample_profile_image.png";

function Profile() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        width: "8rem",
        height: "0.1rem",
        border: "none",
        backgroundColor: "black",
        margin: "2rem",
      }}
    />
  );

  return (
    <div>
      <New_Navbar />
      <div className="profile_container">
        <div className="info_container">
          <div className="image_div">
            <img src={profileImage} />
          </div>
          <div className="profile_info">
            <span>ayush_jhunjhunwala</span>
            <div className="profile_deets">
              <span>58 posts</span>
              <span>919 followers</span>
              <span>1354 following</span>
            </div>
            <div className="profile_bio">
              <p>Ayush Jhunjhunwala</p>
              <span className="bio">Email: ayushjhun13@gmail.com</span>
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
