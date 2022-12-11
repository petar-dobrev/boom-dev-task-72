import React from "react";

function Tags({ tags }) {
  const tagList = tags.map((tag) => (
    <div className="tag" key={tag}>
      #{tag}
    </div>
  ));
  return <div className="tags">{tagList}</div>;
}

export default Tags;
