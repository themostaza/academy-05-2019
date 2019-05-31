import React from "react";

function Post(props) {
  return (
    <React.Fragment>
      <b>{props.post.title}</b>
      <br />
      <br />
    </React.Fragment>
  );
}

export default Post;
