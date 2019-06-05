import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import logo from "../assets/logo.svg";

import hackernewsService from "../services/hackernews";
import PostList from "./PostList";
import PostInfo from "./PostInfo";
import Spinner from "./Spinner";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true
    };
    hackernewsService
      .fetchPosts()
      .then(posts =>
        this.setState({ posts, isLoading: false })
      );
  }

  render() {
    console.log(hackernewsService);
    if (this.state.isLoading) {
      return <Spinner />;
    }
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            component={PostList}
          />
          <Route
            path="/post/:id"
            component={PostInfo}
          />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
