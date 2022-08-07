import {Outlet, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'

const PublicRoute = () => {
  const token = useSelector(({auth}) => auth.userToken)
  return (
    Object.keys(token).length === 0 ? <Outlet /> : <Navigate to='/dashboard' />
  )
}

export default PublicRoute