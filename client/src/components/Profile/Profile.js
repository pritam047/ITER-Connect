import React, { useRef } from "react";
import "./Profile.css";
import NewNavbar from "../Navbar/New Navbar";
// import profileImage from "./sample_profile_image.png";

function Profile() {
  document.title = "ITER Connect | Profile";
  const user = JSON.parse(localStorage.getItem('profile'));

  // const ColoredLine = ({ color }) => (
  //   <hr
  //     style={{
  //       width: "8rem",
  //       height: "0.1rem",
  //       border: "none",
  //       backgroundColor: "black",
  //       margin: "2rem",
  //     }}
  //   />
  // );
  const fileInput = useRef();

  const selectFile = () => {
      fileInput.current.click();
  }
  return (
    <div>
      <NewNavbar />
      <div className="profile_container">
        <div className="info_container">
          
          <div className="image_div"> 
            <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="profile dp" />
            
            <input type="file" style={{ "display": "none" }} ref={fileInput} multiple={false} accept="image/*;capture=camera"/>
            <span className="addImgIcon" onClick={ selectFile }></span>
            <div>
				<button >Upload</button>
			</div>
          </div>
          
          <div className="profile_info">
            <span>{ user?.result.name }</span>
            <div className="profile_deets">
              <span>58 posts</span>
              <span>919 followers</span>
              <span>1354 following</span>
            </div>
            <div className="profile_bio">
              <p>{ user?.result.name }</p>
              <span className="bio">Email: { user?.result.email }</span>
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
