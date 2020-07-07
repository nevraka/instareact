import React from "react";
import "./timeline.css";
import Post from "../Post";

const Timeline = ({ images }) => (
  <div className="timeline">
    {images.map((image) => (
      <Post
        key={image.id}
        id={image.id}
        title={image.user.name}
        loc={image.user.location}
        image={image.urls.regular}
        profileImage={image.user.profile_image.small}
        likeCount={image.likes}
        description={image.description}
        tags={image.tags}
        createdat={image.created_at}
      />
    ))}
  </div>
);

export default Timeline;
