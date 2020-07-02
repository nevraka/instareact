import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./post.css";
import Comments from "./Comments";
import Buttons from "./Buttons";
import AddTags from "./AddTags";
import CommentInput from "./CommentInput";
import { format } from "date-fns";

const Post = ({
  id,
  title,
  image,
  profileImage,
  loc,
  likeCount,
  description,
  tags,
  createdat,
}) => {
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

  const date = Date.parse(createdat);

  return (
    <>
      <div className="heading">
        <img className="profile-image" alt="" src={profileImage} />
        <div className="title">
          {title}
          <span className="paper-plane-icon">
            <i className="paper plane outline icon"></i>
          </span>
          <div className="location">{loc}</div>
        </div>
      </div>
      <Link to={`/post/${id}`}>
        <img alt="" src={image} className="post-image" />
      </Link>
      <span className="right-floated">{`Created at: ${format(
        date,
        "dd MMM yyyy"
      )}`}</span>
      <Buttons
        liked={liked}
        bookmarked={bookmarked}
        onToggleShowInput={onToggleShowInput}
        onToggleLike={onToggleLike}
        onBookmark={onBookmark}
      />
      <div className="count">{likeCount + " likes"}</div>
      {description && <div className="description-css">{description}</div>}
      <AddTags tags={tags} />
      <Comments comments={comments} onToggleShowInput={onToggleShowInput} />
      <CommentInput
        showInput={showInput}
        comments={comments}
        setComments={setComments}
        inputRef={inputRef}
      />
    </>
  );
};

export default Post;
