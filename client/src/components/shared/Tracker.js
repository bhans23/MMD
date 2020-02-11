import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MoodForm from "../forms/MoodForm";
import { AuthContext } from "../../providers/AuthContext";

const Tracker = () => {
  const auth = useContext(AuthContext);
  const {
    data: { user }
  } = auth;

  const loggedIn = () => {
    if (user) {
      return <MoodForm />;
    } else {
      return (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      );
    }
  };

  return <div>{loggedIn()}</div>;
};

export default Tracker;
