import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MoodForm from "../forms/MoodForm";
import { AuthContext } from "../../providers/AuthContext";

const Tracker = () => {
  return (
    <>
      <MoodForm />
    </>
  );
};

export default Tracker;
