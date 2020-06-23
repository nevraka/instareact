import React, { useReducer } from "react";
import "./post.css";
import CommentIcon from "./CommentIcon";

const Post = ({ title, image, profileImage, loc, likeCount }) => (
  <>
    <div className="heading">
      <img className="profile-image" alt="" src={profileImage} />
      <div className="title">
        {title}
        <div className="location">{loc}</div>
      </div>
    </div>
    <img alt="" src={image} className="post-image" />
    <div className="count">{likeCount + " likes"}</div>
    <div>
      <CommentIcon />
    </div>
  </>
);

export default Post;
