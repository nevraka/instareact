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
            return <div className={"stay-comment"}>{c}</div>;
          })}
          <div className={"hide-comment"} onClick={onToogleShowAllComments}>
            Hide comments
          </div>
        </>
      ) : (
        <div className={"view comments"} onClick={onToogleShowAllComments}>
          View all comments
        </div>
      )}
    </>
  );
};

export default Comments;
