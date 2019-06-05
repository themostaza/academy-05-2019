import React from "react";

function Post(props) {
  return (
    <React.Fragment>
      <b onClick={props.onClick}>
        {props.post.title}
      </b>
      <br />
      <br />
    </React.Fragment>
  );
}

export default Post;
