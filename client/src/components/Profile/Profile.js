import React from "react";

import "./Profile.css";
import defaultUser from "../../images/default-user.jpg";

import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import NewNavbar from "../Navbar/New Navbar";

function Profile() {
  document.title = "ITER Connect | Profile";
  const user = JSON.parse(localStorage.getItem('profile'));

  // const [image, setImage] = useState("");
  // const fileInput = useRef();

  // const selectFile = () => {
  //   fileInput.current.click();
  // }

  // const uploadImage = () => {
  //   const formData = new FormData();
  //   formData.append('file', image);
  //   formData.append('upload_preset', 'nxazxpzl');

  //   axios.post(`https://api.cloudinary.com/v1_1/proxyz-in/image/upload`, formData)
  //     .then((response) => console.log(response))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  return (
    <div>
      <NewNavbar />
      <div className="profile_container">
        <div className="info_container">

          <div className="image_div">
            {/* <img className="profile_img" src={user?.result?.imageUrl || "https://source.unsplash.com/600x300/?student"} alt="profile dp" /> */}
            <img className="profile_img" src={user?.result?.imageUrl || defaultUser } alt="profile" />
            {/* <input type="file" style={{ "display": "none" }} ref={fileInput} onChange={(e)=> setImage(e.target.files[0])} multiple={false} accept="image/*;capture=camera"/> */}
            {/* <span className="addImgIcon" onClick={ selectFile }></span> */}
            {/* <CloudinaryUploadWidget/> */}
            <div>
              {/* <button onClick={uploadImage}>Upload</button> */}
              <CloudinaryUploadWidget user={user}/>
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
