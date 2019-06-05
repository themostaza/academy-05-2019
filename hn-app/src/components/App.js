import React from "react";
import logo from "../assets/logo.svg";
import hackernewsService from "../services/hackernews";
import Post from "./Post";
import "./App.css";
import PostInfo from "./PostInfo";

class App extends React.Component {
  state = {
    posts: [],
    selectedId: null
  };

  constructor(props) {
    super(props);
    hackernewsService
      .getPosts()
      .then(posts => this.setState({ posts }));
  }

  componentDidMount() {}

  render() {
    console.log(this.state.selectedId);
    if (this.state.selectedId != null) {
      const post = this.state.posts.find(
        p => p.id === this.state.selectedId
      );
      return (
        <PostInfo
          onClick={() =>
            this.setState({ selectedId: null })
          }
          post={post}
        />
      );
    }
    return (
      <div className="App">
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            post={post}
            onClick={() =>
              this.setState({
                selectedId: post.id
              })
            }
          />
        ))}
      </div>
    );
  }
}

export default App;
