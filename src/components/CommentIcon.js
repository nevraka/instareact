import React, { useState } from "react";
import "./comment_icon.css";

const CommentIcon = () => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const onToggleLike = () => {
    setLiked(!liked);
  };
  const onCommentClick = () => {
    setComment(!comment);
  };
  const onBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <>
      <div className="comment-icons">
        <i className={"comment outline icon"} onClick={onCommentClick} />
        <i
          className={`heart ${liked ? "" : "outline"} icon`}
          onClick={onToggleLike}
        />
        <i
          className={`bookmark ${bookmarked ? "" : "outline"} icon pull-right`}
          onClick={onBookmark}
        />
      </div>
      {comment && (
        <div>
          <input className="comment-input" />
        </div>
      )}
    </>
  );
};

export default CommentIcon;
