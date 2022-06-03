import React from "react";
import "./Trending.css";
import hashtag from "./hashtag.png";
import Blog from "../Blog/Blog";

function Trending() {
  return (
    <div className="trending_container">
      <div className="small_container">
        <div className="trending_title">Trending Tags</div>
        <div className="trending_tag">
          <div className="individual_tag">
            <img src={hashtag} />
            <span>ITER Connect</span>
          </div>
          <div className="individual_tag">
            <img src={hashtag} />
            <span>ITER Connect</span>
          </div>
          <div className="individual_tag">
            <img src={hashtag} />
            <span>ITER Connect</span>
          </div>
          <div className="individual_tag">
            <img src={hashtag} />
            <span>ITER Connect</span>
          </div>
          <div className="individual_tag">
            <img src={hashtag} />
            <span>ITER Connect</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
