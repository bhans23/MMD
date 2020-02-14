import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const history = useHistory();

  const handleRegister = user => {
    axios
      .post("/api/auth", user)
      .then(res => {
        setUser(res.data.data);
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  const handleLogin = user => {
    axios
      .post("/api/auth/sign_in", user)
      .then(res => {
        setUser(res.data.data);
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  const handleLogout = () => {
    axios
      .delete("/api/auth/sign_out")
      .then(res => {
        setUser(null);
        history.push("/login");
      })
      .catch(err => console.log(err));
  };

  const toggleEdit = () => {
    setEdit(curEdit => !curEdit);
  };

  const updateUser = user => {
    axios
      .put("/api/auth/", user)
      .then(res => {
        setUser(res.data.data);
      })
      .catch(err => console.log(err));
  };

  const authenticated = user !== null;

  return {
    actions: {
      handleLogin,
      handleLogout,
      handleRegister,
      toggleEdit,
      updateUser
    },
    authenticated,
    data: { user, edit }
  };
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const authValue = useAuth();
  return (
    <AuthContext.Provider value={authValue}> {children} </AuthContext.Provider>
  );
};
