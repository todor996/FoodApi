import axios from './index';

export const getRecipes = () => {
  return axios
    .get('/recipes')
    .then(response => response.data)
    .catch(e => console.log(e.toString()));
};

export const getLikedRecipes = id => {
  return axios
    .get(`/users/${id}`)
    .then(response => response.data)
    .catch(e => console.log(e.toString()));
};
