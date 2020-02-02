import React from 'react';
import MoodForm from '../forms/MoodForm';

const Tracker = () => (
  <>
loginForm = () => {
    const { auth: {user, handleLogout}, location: {pathname}, history } = this.props;

    if (user) {
      return (
        <Toolbar position='right'>
          <Button
            name='logout'
            onClick={ () => handleLogout(history) }>
            Logout
          </Button>
          <Link to='/profile'>
            <Button
              id='profile'
              name='profile'
              active={pathname ? '/profile' : undefined}>
              Profile
            </Button>
          </Link>
        </Toolbar>
      )
    } else {
      return (
        <Toolbar position='right'>
          <Link to='/login'>
            <Button
              id='login'
              name='login'
              active={pathname ? '/login' : undefined}>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button
              id='register'
              name='register'
              active={pathname ? '/register' : undefined}>
              Register
            </Button>
          </Link>
        </Toolbar>
      )
    }
  }

  </>

)

export default Tracker;