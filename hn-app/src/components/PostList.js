import React from "react";

import hackernewsService from "../services/hackernews";
import Post from "./Post";
import "./PostList.css";

class PostList extends React.Component {
  render() {
    console.log(hackernewsService.getPosts());
    return (
      <div className="App">
        {hackernewsService
          .getPosts()
          .map(post => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    );
  }
}

export default PostList;
