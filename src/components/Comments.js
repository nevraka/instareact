import React, { useState } from "react";
import "./comment_icon.css";

const Comments = (props) => {
  const [showAllComments, setShowAllComments] = useState(true);
  const onToogleShowAllComments = () => setShowAllComments(!showAllComments);

  return (
    <>
      {props.comments.length === 0 ? (
        <div className={"add-comment"} onClick={props.onToggleShowInput}>
          Add Comments
        </div>
      ) : showAllComments ? (
        <>
          {props.comments.map((c) => {
            return <div>{c}</div>;
          })}
          <div onClick={onToogleShowAllComments}>Hide comments</div>
        </>
      ) : (
        <div onClick={onToogleShowAllComments}>View all comments</div>
      )}
    </>
  );
};

export default Comments;
