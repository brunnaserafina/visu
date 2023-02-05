import axios from 'axios';

const BASE_URL = 'http://localhost:4001';

function createHeaders() {
  //const token = JSON.parse(localStorage.getItem('visu')).token;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NTQ0NTQwMH0.Xvv4rDt-IVJcjkWdAVB3gTcLVIcxfioC2kglRQ3kABg';

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
}

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-in`, body);

  return promise;
}

function getTravels() {
  const config = createHeaders();

  const promise = axios.get(`${BASE_URL}/travels`, config);

  return promise;
}

function getHistoric() {
  const config = createHeaders();

  const promise = axios.get(`${BASE_URL}/historic`, config);

  return promise;
}

function getFavorites() {
  const config = createHeaders();

  const promise = axios.get(`${BASE_URL}/favorites`, config);

  return promise;
}

export { postSignIn, getTravels, getHistoric, getFavorites };
