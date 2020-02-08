import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./providers/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,

  document.getElementById("root")
);
