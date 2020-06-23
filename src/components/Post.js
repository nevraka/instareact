import React, { useState, useRef, useEffect } from "react";
import "./post.css";
import Comments from "./Comments";
import Buttons from "./Buttons";
import CommentInput from "./CommentInput";

const Post = ({ title, image, profileImage, loc, likeCount }) => {
  const [liked, setLiked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [comments, setComments] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const onToggleLike = () => {
    setLiked(!liked);
  };
  const onToggleShowInput = () => {
    setShowInput(!showInput);
  };
  const onBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
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
        <Buttons
          liked={liked}
          bookmarked={bookmarked}
          onToggleShowInput={onToggleShowInput}
          onToggleLike={onToggleLike}
          onBookmark={onBookmark}
        />
        <Comments comments={comments} onToggleShowInput={onToggleShowInput} />
        <CommentInput
          showInput={showInput}
          comments={comments}
          setComments={setComments}
          inputRef={inputRef}
        />
      </div>
    </>
  );
};

export default Post;
