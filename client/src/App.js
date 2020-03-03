import React from "react";
import Tracker from "./components/shared/Tracker";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Container from "@material-ui/core/Container";


// const MyComponent = () => {
//   const [state, setState] = React.useState(1);

//   return <button onClick={() => {
//     console.log(state);
//     setState(2);
//     console.log(state);
//     setState(state => {
//       console.log({ state });
//       return state + 3;
//     });
//     console.log(state);
//     setState(currentState => {
//       console.log({ currentState });
//       return 4;
//     })
//     console.log(state);
//   }}>Benjamin {state}</button>;
// }

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
