import React from "react";

import hackernewsService from "../services/hackernews";
import Post from "./Post";
import "./PostList.css";

class PostList extends React.Component {
  state = {
    posts: []
  };

  constructor(props) {
    super(props);
    hackernewsService
      .getPosts()
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
