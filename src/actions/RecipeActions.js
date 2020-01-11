import {
  GET_RECIPES_SUCCESS,
  GET_RECIPES,
  GET_RECIPES_FAIL,
  GET_USER_RECIPES,
  GET_USER_RECIPES_FAIL,
  GET_USER_RECIPES_SUCCESS,
} from '../constants/actions';
import {
  getRecipes as getRecipesApi,
  getLikedRecipes as getLikedRecipesApi,
} from '../api/recipes';

export const getRecipes = () => dispatch => {
  dispatch({type: GET_RECIPES});
  return getRecipesApi()
    .then(res => {
      dispatch({type: GET_RECIPES_SUCCESS, payload: res});
    })
    .catch(error => {
      dispatch({type: GET_RECIPES_FAIL});
      console.error(error.toString());
    });
};

export const getUserRecipes = id => dispatch => {
  dispatch({type: GET_USER_RECIPES});
  return getLikedRecipesApi(id)
    .then(res => {
      console.log(res);
      dispatch({type: GET_USER_RECIPES_SUCCESS, payload: res});
    })
    .catch(error => {
      dispatch({type: GET_USER_RECIPES_FAIL});
      console.error(error.toString());
    });
};
