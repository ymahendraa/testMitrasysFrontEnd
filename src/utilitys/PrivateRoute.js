import {Outlet, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

const PrivateRoute = () => {
  const token = useSelector(({auth}) => auth.userToken)
  // console.log(token);
  return (
    Object.keys(token).length !== 0 ? <Outlet /> : <Navigate to='/' />
  )
}

export default PrivateRoute