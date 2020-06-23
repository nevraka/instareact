import React from "react";

const Buttons = (props) => (
  <div className="comment-icons">
    <i className={"comment outline icon"} onClick={props.onToggleShowInput} />
    <i
      className={`heart ${props.liked ? "" : "outline"} icon`}
      onClick={props.onToggleLike}
    />
    <i
      className={`bookmark ${
        props.bookmarked ? "" : "outline"
      } icon pull-right`}
      onClick={props.onBookmark}
    />
  </div>
);

export default Buttons;
