import React, { useState, useRef, useEffect } from "react";
import "./post.css";
import Comments from "./Comments";
import Buttons from "./Buttons";
import AddTags from "./AddTags";
import CommentInput from "./CommentInput";
import { format } from "date-fns";
import FsLightbox from "fslightbox-react";

const Post = ({
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
  const [toggler, setToggler] = useState(false);

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
          <div className="location">{loc}</div>
        </div>
      </div>
      <img
        onClick={() => setToggler(!toggler)}
        alt=""
        src={image}
        className="post-image"
      />
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
      <FsLightbox toggler={toggler} sources={[image]} />
    </>
  );
};

export default Post;
