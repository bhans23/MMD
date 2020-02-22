import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./css/mainApp.css";
import { AuthProvider } from "./providers/AuthContext";
import { MoodProvider } from "./providers/MoodContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <MoodProvider>
        <App />
      </MoodProvider>
    </AuthProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
