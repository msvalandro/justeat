import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://uk.api.just-eat.io',
});
