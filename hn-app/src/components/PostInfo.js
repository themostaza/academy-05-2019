import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

import hackernewsService from "../services/hackernews";

import Spinner from "./Spinner";

class PostInfo extends React.Component {
  render() {
    if (this.props.posts.isLoading) {
      return <Spinner />;
    }
    const postId = this.props.match.params.id;
    const post = this.props.posts.entries.find(
      p => p.id === Number(postId)
    );
    return post ? (
      <div>
        <p>{post.title}</p>
        <Link to={"/"}>{`Torna alla home`}</Link>
      </div>
    ) : (
      <div>{`404 POST NOT FOUND`}</div>
    );
  }
}

export default inject("posts")(
  observer(PostInfo)
);
