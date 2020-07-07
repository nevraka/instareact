import React from "react";

const AddTags = ({ tags }) => {
  return (
    <div className="ui tag">
      {tags.map(({ title }) => (
        <div key={title} className="ui red label">
          {title}
        </div>
      ))}
    </div>
  );
};

export default AddTags;
