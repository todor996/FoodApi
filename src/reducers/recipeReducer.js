import {
  GET_RECIPES,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAIL,
  GET_USER_RECIPES,
  GET_USER_RECIPES_SUCCESS,
  GET_USER_RECIPES_FAIL,
  GET_DETAILED_RECIPE,
} from '../constants/actions';

const initialState = {
  recipes: [],
  loading: false,
  likedRecipes: [],
  ownedRecipes: [],
  detailed: null,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_RECIPES_SUCCESS: {
      const {payload} = action;
      return {
        ...state,
        loading: false,
        recipes: payload.recipes,
      };
    }
    case GET_RECIPES_FAIL: {
      return {
        ...state,
        recipes: [],
        loading: false,
      };
    }
    case GET_USER_RECIPES: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_USER_RECIPES_SUCCESS: {
      const {payload} = action;
      return {
        ...state,
        loading: false,
        likedRecipes: payload.user.likedRecipes,
        ownedRecipes: payload.user.Recipes,
      };
    }
    case GET_USER_RECIPES_FAIL: {
      return {
        ...state,
        likedRecipes: [],
        ownedRecipes: [],
        loading: false,
      };
    }
    case GET_DETAILED_RECIPE: {
      const {payload} = action;
      return {
        ...state,
        detailed: payload,
      };
    }
    default:
      return state;
  }
};
