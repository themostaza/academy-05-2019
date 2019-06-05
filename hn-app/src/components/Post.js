import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <React.Fragment>
      <Link to={`/post/${props.post.id}`}>
        <b>{props.post.title}</b>
      </Link>
      <br />
      <br />
    </React.Fragment>
  );
}

export default Post;
