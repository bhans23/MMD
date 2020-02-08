
import {useContext} from 'react';
import {AuthContext} from '../../providers/AuthContext'

const Tracker = () => {
  const auth = useContext(AuthContext)
  console.log(auth)
  return null
}
 


export default Tracker;