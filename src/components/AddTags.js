import React from "react";

const AddTags = ({ tags }) => {
  return (
    <div className="ui tag">
      {tags.map(({ title }) => (
        <div className="ui red label">{title}</div>
      ))}
    </div>
  );
};

export default AddTags;
