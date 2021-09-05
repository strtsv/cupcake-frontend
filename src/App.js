import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import BlogPost from "./pages/BlogPost";
import BlogList from "./pages/BlogList";

function App() {
  return (
    <Switch>
      <Route exact path="/index.html" component={BlogList} />
      <Route exact path="/blog-post.html" component={BlogPost} />
      <Route exact path="/" component={BlogList} />
    </Switch>
  );
}

export default App;
