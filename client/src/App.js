import React from "react";
import Tracker from "./components/shared/Tracker";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Tracker />
      <Switch>
        <Route exact path="/" component={Tracker} />
      </Switch>
    </>
  );
};
export default App;
