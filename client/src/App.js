import React from "react";
import Tracker from "./components/shared/Tracker";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Container from "@material-ui/core/Container";





const App = () => {
  return (
    <div className="trackerCss">
      
      <Container >
        <Switch>
          <ProtectedRoute exact path="/" component={Tracker} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Container>
      
    </div>
  );
};
export default App;
