import React from "react";
import { inject, observer } from "mobx-react";

import hackernewsService from "../services/hackernews";
import Post from "./Post";
import Spinner from "./Spinner";

import "./PostList.css";

class PostList extends React.Component {
  render() {
    if (this.props.posts.isLoading) {
      return <Spinner />;
    }

    return (
      <div className="App">
        {this.props.posts.entries.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default inject("posts")(
  observer(PostList)
);
