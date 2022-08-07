import axios from "axios";

const API = ({ method, url, data }) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  return new Promise((resolve, reject) => {
    axios(
      {
        headers: { "Content-Type": "application/json" },
        crossDomain: true,
        method,
        url,
        data,
        validateStatus: false,
      },
      {
        cancelToken: source.token,
      }
    )
      .then((response) => {
        //console.log(response)
        if (response.status === 200) {
          resolve(response.data);
        } else if (response.status === 401) {
          reject(response.data);
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Requested Canceled", err.message);
        } else {
          reject(err);
        }
      });
    // cancel the request (the message parameter is optional)
    source.cancel("Operation canceled by the user.");
  });
};

const getUseAPIWithToken = ({ method, url, token, params }) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  return new Promise((resolve, reject) => {
    axios(
      {
        headers: {
          Authorization: token,
        },
        crossDomain: true,
        method,
        url,
        params,
        validateStatus: false,
      },
      {
        cancelToken: source.token,
      }
    )
      .then((response) => {
        // console.log(response)
        resolve(response.data);
        if (response.status === 200) {
          resolve(response.data);
        } else if (response.status === 401) {
          reject(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
        if (axios.isCancel(err)) {
          console.log("Requested Canceled", err.message);
        } else {
          reject(err);
        }
      });
    // cancel the request (the message parameter is optional)
    source.cancel("Operation canceled by the user.");
  });
};

const APIWithToken = ({ method, url, token, data }) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  return new Promise((resolve, reject) => {
    axios(
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        crossDomain: true,
        method,
        url,
        data,
        validateStatus: false,
      },
      {
        cancelToken: source.token,
      }
    )
      .then((response) => {
        // console.log(response)
        if (response.status === 200) {
          resolve(response.data);
        } else if (response.status === 401) {
          reject(response.data);
        }
      })
      .catch((err) => {
        // console.log(err)
        if (axios.isCancel(err)) {
          console.log("Requested Canceled", err.message);
        } else {
          reject(err);
        }
      });
    // cancel the request (the message parameter is optional)
    source.cancel("Operation canceled by the user.");
  });
};

const api = {
  post: (url, data) => API({ method: "post", url: `${url}`, data }),
  getWithToken: (url, token, params) =>
    getUseAPIWithToken({ method: "get", url: `${url}`, token, params }),
  deleteWithToken: (url, data, token) =>
    APIWithToken({ method: "delete", url: `${url}`, token, data }),
  postWithToken: (url, data, token) =>
    APIWithToken({ method: "post", url: `${url}`, token, data }),
  putWithToken: (url, data, token) =>
    APIWithToken({ method: "put", url: `${url}`, token, data }),
};

export const services = {
  login: (data) =>
    api.post(`https://mitramas-test.herokuapp.com/auth/login`, data),
  getCustomer: (token) =>
    api.getWithToken(`https://mitramas-test.herokuapp.com/customers`, token),
  addCustomer: (token, data) =>
    api.postWithToken(
      "https://mitramas-test.herokuapp.com/customers",
      data,
      token
    ),
  updateCustomer: (token, data) =>
    api.putWithToken(
      "https://mitramas-test.herokuapp.com/customers",
      data,
      token
    ),
  deleteCustomer: (token, data) =>
    api.deleteWithToken(
      "https://mitramas-test.herokuapp.com/customers",
      data,
      token
    ),
};
