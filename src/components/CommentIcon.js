import React, { useState } from "react";
import "./comment_icon.css";

const CommentIcon = () => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [comments, setComments] = useState([]);

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
          <input
            className="comment-input"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setComments([...comments, event.target.value]);
                event.target.value = "";
              }
            }}
          />
        </div>
      )}
      {comments.length === 0 ? (
        <div className={"add-comment"} onClick={onCommentClick}>
          Add Comments
        </div>
      ) : (
        <>
          {comments.map((c) => {
            return <div>{c}</div>;
          })}
          <div onClick={onCommentClick}>View all comments</div>
        </>
      )}
    </>
  );
};

export default CommentIcon;
