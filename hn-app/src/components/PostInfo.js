import React from "react";
import { Link } from "react-router-dom";

import hackernewsService from "../services/hackernews";

import Spinner from "./Spinner";

class PostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true
    };
    hackernewsService
      .getPosts()
      .then(posts =>
        this.setState({ posts, isLoading: false })
      );
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }

    const postId = this.props.match.params.id;
    console.log(this.state.posts, postId);
    const post = this.state.posts.find(
      p => p.id === Number(postId)
    );
    return post ? (
      <div>
        <p>{post.title}</p>
        <Link to={"/"}>{`Torna alla lista`}</Link>
      </div>
    ) : (
      <div>{`404 POST NOT FOUND`}</div>
    );
  }
}

export default PostInfo;
