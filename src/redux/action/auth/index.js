import {services} from '../../../utilitys/service';

export const handleLogin = ({service, type = 'LOGIN', payload}) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      services[service](payload)
        .then(data => {
          dispatch({
            type,
            data,
          });
          const today = new Date()
          const tomorrow = new Date(today)
          data['expired_date'] = today.getTime() + (1*60*60*1000)
          // console.log(data)
          localStorage.setItem('userToken', JSON.stringify(data));
          resolve(data);
        })
        .catch(error => reject(error)); 
    });
  };
};


export const handleLogout = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT',
    });
    // ** Remove user, accessToken & refreshToken from localStorage
    localStorage.clear();
  };
};

