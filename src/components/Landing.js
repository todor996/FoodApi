import {View, Dimensions, StyleSheet, ImageBackground} from 'react-native';

import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import RecipeComponentList from '../components/RecipeComponentList';

export const Landing = props => {
  const {recipes, user, like, dislike, likedRecipes} = props;
  return recipes.length > 0 ? (
    <RecipeComponentList
      recipeList={recipes}
      user={user}
      like={like}
      dislike={dislike}
      likedRecipes={likedRecipes}
    />
  ) : (
    <Loader />
  );
};

Landing.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
  user: PropTypes.string,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
};

Landing.defaultProps = {
  recipes: [],
  user: null,
};
