import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import logo from "../assets/logo.svg";

import PostList from "./PostList";
import PostInfo from "./PostInfo";

class AppRouter extends React.Component {
  render() {
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
