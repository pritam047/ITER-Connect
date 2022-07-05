import React, { Component } from "react";
import axios from 'axios';
class CloudinaryUploadWidget extends Component {

  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "proxyz-in",
        uploadPreset: "nxazxpzl"
      },
      async(error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          const id = this.props.user.result._id;
          console.log(id);
          const updated = await axios.patch(`http://localhost:5000/user/${id}`, {imageUrl: result.info.url});
          console.log(updated); 
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }
  
  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
