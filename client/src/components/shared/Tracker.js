
import React, {useContext} from 'react';
import Login from '../auth/Login';
import Button from '@material-ui/core/Button';

const Tracker = () => {
  const auth = useContext(authContext);
  const {data:{user}};

  const loggedIn = ()=> {
    if 
  }
  
  return (
      <div>
        <Button variant="contained">Login</Button>
      </div>
    <Login/>
  )
}
 


export default Tracker;