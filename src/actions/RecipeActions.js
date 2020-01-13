import {
  GET_RECIPES_SUCCESS,
  GET_RECIPES,
  GET_RECIPES_FAIL,
  GET_USER_RECIPES,
  GET_USER_RECIPES_FAIL,
  GET_USER_RECIPES_SUCCESS,
  GET_DETAILED_RECIPE,
  CREATE_RECIPE,
  SEARCH_RECIPES,
} from '../constants/actions';
import {
  getRecipes as getRecipesApi,
  getLikedRecipes as getLikedRecipesApi,
  likeRecipe as likeRecipeApi,
  dislikeRecipe as dislikeRecipeApi,
  getDetailedRecipe as getDetailedRecipeApi,
  searchRecipes as searchRecipesApi,
  createRecipe as createRecipeApi,
} from '../api/recipes';

export const getRecipes = () => dispatch => {
  dispatch({type: GET_RECIPES});
  return getRecipesApi()
    .then(res => {
      dispatch({type: GET_RECIPES_SUCCESS, payload: res});
    })
    .catch(error => {
      dispatch({type: GET_RECIPES_FAIL});
      console.log(error.toString());
    });
};

export const getUserRecipes = id => dispatch => {
  dispatch({type: GET_USER_RECIPES});
  return getLikedRecipesApi(id)
    .then(res => {
      dispatch({type: GET_USER_RECIPES_SUCCESS, payload: res});
    })
    .catch(error => {
      dispatch({type: GET_USER_RECIPES_FAIL});
      console.log(error.toString());
    });
};

export const likeRecipe = (recipeId, userId) => dispatch => {
  return likeRecipeApi(recipeId, userId)
    .then(() => {
      dispatch(getUserRecipes(userId));
      dispatch(getRecipes());
    })
    .catch(error => {
      console.log(error.toString());
    });
};

export const dislikeRecipe = (recipeId, userId) => dispatch => {
  return dislikeRecipeApi(recipeId, userId)
    .then(() => {
      dispatch(getUserRecipes(userId));
      dispatch(getRecipes());
    })
    .catch(error => {
      console.log(error.toString());
    });
};

export const getDetailedRecipe = recipeId => dispatch => {
  return getDetailedRecipeApi(recipeId)
    .then(res => {
      dispatch({type: GET_DETAILED_RECIPE, payload: res.recipe});
    })
    .catch(error => {
      console.log(error.toString());
    });
};

export const searchRecipes = options => dispatch => {
  return searchRecipesApi(options)
    .then(res => dispatch({type: SEARCH_RECIPES, payload: res.recipes}))
    .catch(error => {
      console.log(error.toString());
    });
};

export const createRecipe = (options, UserId) => dispatch => {
  return createRecipeApi({...options, UserId: UserId})
    .then(() => {
      dispatch(getUserRecipes(UserId));
      dispatch(getRecipes());
    })
    .catch(error => {
      console.log(error.toString());
    });
};
