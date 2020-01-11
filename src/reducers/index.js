import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {recipeReducer} from './recipeReducer';

export default combineReducers({
  authReducer: authReducer,
  recipeReducer: recipeReducer,
});
