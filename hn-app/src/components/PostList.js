import React from "react";

import hackernewsService from "../services/hackernews";
import Post from "./Post";
import Spinner from "./Spinner";

import "./PostList.css";

class PostList extends React.Component {
  render() {
    if (hackernewsService.getPosts() == null) {
      return <Spinner />;
    }
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
