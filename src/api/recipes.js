import axios from './index';

export const getRecipes = () => {
  return axios
    .get('/recipes')
    .then(response => response.data)
    .catch(e => console.log(e.toString()));
};

export const getDetailedRecipe = id => {
  return axios
    .get(`/recipes/${id}/detailed`)
    .then(response => response.data)
    .catch(e => console.log(e.toString()));
};

export const getLikedRecipes = id => {
  return axios
    .get(`/users/${id}`)
    .then(response => response.data)
    .catch(e => console.log(e.toString()));
};

export const likeRecipe = (recipeId, userId) => {
  return axios
    .post(`/recipes/${recipeId}/like`, {userId})
    .then(response => response.data)
    .catch(e => {
      console.log(e.toString());
    });
};

export const dislikeRecipe = (recipeId, userId) => {
  return axios
    .post(`/recipes/${recipeId}/dislike`, {userId})
    .then(response => response.data)
    .catch(e => {
      console.log(e.toString());
    });
};

export const searchRecipes = options => {
  return axios
    .post('/recipes/search', options)
    .then(response => response.data)
    .catch(e => {
      console.log(e.toString());
    });
};

export const createRecipe = options => {
  return axios
    .post('/recipes', options)
    .then(response => response.data)
    .catch(e => {
      console.log(e.toString());
    });
};
