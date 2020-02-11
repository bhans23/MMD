import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import axios from "axios";

const FetchUser = ({children}) => {
  const [loaded, setLoaded] = usetate(false);
  const auth = useContext(AuthContext);
  

  useEffect(() => {
    const {actions:{authenticated, setUser}} = auth;
  

    if (authenticated) {
        loaded();
      } else {
        if (checkLocalToken()) {
          axios.get('/api/auth/validate_token')
            .then( res => {
              setUser(res.data.data);
              loaded();
            })
            .catch( res => {
              loaded();
            })
        } else {
          loaded();
        }
      }

      checkLocalToken = () => {
        const token = localStorage.getItem('access-token');
        return token;
      }
    
      loaded = () => setLoaded(true);
    
      
        return loaded ? children : null;
      
    
    
  });
};


export default FetchUser;
