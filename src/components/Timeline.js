import React from "react";
import "./timeline.css";
import Post from "./Post";
import data from "./data.json";

const renderPost = (postData) => (
  <Post
    title={postData.user.name}
    loc={postData.user.location}
    image={postData.urls.regular}
    profileImage={postData.user.profile_image.small}
    likeCount={postData.likes}
  />
);

const Timeline = () => (
  <div className="timeline">{data.results.map(renderPost)}</div>
);

export default Timeline;
