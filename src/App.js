import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { useSelector } from 'react-redux/es/exports';
import {useDispatch} from 'react-redux'
import { handleLogout} from "../src/redux/action/auth/index"
import PrivateRoute from './utilitys/PrivateRoute'
import PublicRoute from './utilitys/PublicRoute'

function App() {
  const dispatch = useDispatch()
  const token = useSelector(({auth}) => auth.userToken)

  if(Object.keys(token).length !== 0){
    const now = new Date();
    // const fiveMinutes = 1000 * 60 * 5;
    // console.log(now.getTime() + (1*60*60*1000))
    // console.log((token.expired_date - now.getTime()) / 1000 < 1000 )
    if( (token.expired_date - now.getTime()) / 1000 < 1000 ){
      dispatch(handleLogout())
    }
  }

  return (
  <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Dashboard />} path="/dashboard" exact/>
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login/>} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
