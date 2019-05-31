import React from "react";
import logo from "../assets/logo.svg";
import hackernewsService from "../services/hackernews";
import Post from "./Post";
import "./App.css";

class App extends React.Component {
  state = {
    posts: []
  };

  constructor(props) {
    super(props);
    hackernewsService
      .getPosts()
      .then(posts => this.setState({ posts }));
  }

  componentDidMount() {}

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

export default App;
