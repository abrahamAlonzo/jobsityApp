import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/';
export const get = async payload => {
  const instance = axios.create({
    baseURL: API_URL,
    timeout: 2000,
  });

  return instance;
};

const getShows = async id => {
  return await axios.get(`${API_URL}shows/${id}`);
};

const getSearchShowsByName = async name => {
  return await axios.post(`${API_URL}shows/?q=girls`);
};
export {getShows, getSearchShowsByName};
