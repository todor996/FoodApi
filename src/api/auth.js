import axios from './index';

export const login = (email, password) => {
  return axios
    .post('/auth/login', {email, password})
    .then(response => response.data)
    .catch(e => console.log(e.toString()));
};

export const signUp = (email, password, firstName, lastName) => {
  return axios
    .post('/auth/register', {email, password, firstName, lastName})
    .then(response => response.data)
    .catch(e => console.log(e.toString()));
};
