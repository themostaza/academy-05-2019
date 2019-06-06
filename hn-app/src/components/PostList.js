import React from "react";
import { inject, observer } from "mobx-react";

import hackernewsService from "../services/hackernews";
import Post from "./Post";
import Spinner from "./Spinner";

import "./PostList.css";

@inject(stores => ({
  posts: stores.posts.entries,
  isLoading: stores.posts.isLoading
}))
@observer
class PostList extends React.Component {
  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <div className="App">
        {this.props.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
