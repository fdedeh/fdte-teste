import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MapPage from "./screens/Map/MapPage";
import HomePage from "./screens/Home/HomePage";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

const App = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/map" exact component={MapPage} />
    <Redirect to="/" />
  </Switch>
);

export default App;
