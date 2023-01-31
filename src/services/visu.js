import axios from 'axios';

const BASE_URL = 'http://localhost:4001';

function createHeaders() {
  const token = JSON.parse(localStorage.getItem('visu')).token;

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

export { postSignIn };
