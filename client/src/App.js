import React from "react";
import Tracker from "./components/shared/Tracker";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Tracker} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};
export default App;
