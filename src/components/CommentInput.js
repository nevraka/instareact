import React from "react";

const CommentInput = ({ showInput, comments, setComments, inputRef }) => {
  return showInput ? (
    <div>
      <input
        ref={inputRef}
        className="comment-input"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setComments([...comments, event.target.value]);
            event.target.value = "";
          }
        }}
      />
    </div>
  ) : null;
};

export default CommentInput;
