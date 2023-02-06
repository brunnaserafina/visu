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

function getTravelInfo(id) {
  const config = createHeaders();

  const promise = axios.get(`${BASE_URL}/travels/${id}`, config);

  return promise;
}

function postNewTravel(body) {
  const config = createHeaders();

  const promise = axios.post(`${BASE_URL}/post-travel`, body, config);

  return promise;
}

function postFavorite(id) {
  const config = createHeaders();

  const promise = axios.post(`${BASE_URL}/favorites/${id}`, {}, config);

  return promise;
}

function removeFavorite(id) {
  const config = createHeaders();

  const promise = axios.delete(`${BASE_URL}/favorites/${id}`, config);

  return promise;
}

function getFavorite(id) {
  const config = createHeaders();

  const promise = axios.get(`${BASE_URL}/favorites/${id}`, config);

  return promise;
}

export {
  postSignIn,
  getTravels,
  getHistoric,
  getFavorites,
  getTravelInfo,
  postNewTravel,
  postFavorite,
  removeFavorite,
  getFavorite,
};
