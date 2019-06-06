import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import {
  Provider,
  inject,
  observer
} from "mobx-react";

import PostList from "./PostList";
import PostInfo from "./PostInfo";
import Spinner from "./Spinner";

import Posts from "../stores/Posts";
import hackernewsService from "../services/hackernews";

const PostsStore = new Posts();

const InfoApp = props => {
  return (
    <div>
      <p>{`Benvenuto in InfoApp `}</p>
      <Link
        to={"/list"}
      >{`Vai a lista post`}</Link>
    </div>
  );
};

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    hackernewsService.fetchPosts();
  }

  render() {
    console.log(hackernewsService);
    if (this.state.isLoading) {
      return <Spinner />;
    }
    return (
      <Provider posts={PostsStore}>
        <Router>
          <div>
            <div>
              <h1>HN APP</h1>
            </div>
            <Route
              path="/"
              exact
              component={InfoApp}
            />
            <Route
              path="/list"
              component={PostList}
            />
            <Route
              path="/post/:id"
              component={PostInfo}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRouter;
