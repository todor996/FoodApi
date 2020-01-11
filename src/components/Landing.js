import {View, Dimensions, StyleSheet, ImageBackground} from 'react-native';

import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import RecipeComponentList from '../components/RecipeComponentList';

export const Landing = ({recipes, user}) => {
  return recipes.length > 0 ? (
    <RecipeComponentList recipeList={recipes} user={user} />
  ) : (
    <Loader />
  );
};

Landing.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
  user: PropTypes.string,
};

Landing.defaultProps = {
  recipes: [],
  user: null,
};
