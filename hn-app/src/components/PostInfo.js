import React from "react";

function PostInfo(props) {
  return props.post ? (
    <div>
      <p>{props.post.title}</p>
      <button
        onClick={props.onClick}
      >{`Indietro`}</button>
    </div>
  ) : (
    <div>{`404 POST NOT FOUND`}</div>
  );
}

export default PostInfo;
