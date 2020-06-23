import React from "react";
import "./comment_icon.css";

const Comments = (props) => {
  return (
    <>
      {props.comments.length === 0 ? (
        <div className={"add-comment"} onClick={props.onToggleShowInput}>
          Add Comments
        </div>
      ) : (
        <>
          {props.comments.map((c) => {
            return <div>{c}</div>;
          })}
          <div onClick={props.onToggleShowInput}>View all comments</div>
        </>
      )}
    </>
  );
};

export default Comments;
