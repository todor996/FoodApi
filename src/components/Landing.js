import {View, Dimensions, StyleSheet, ImageBackground} from 'react-native';

import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import RecipeComponentList from '../components/RecipeComponentList';

export const Landing = props => {
  const {recipes, user, like, dislike, likedRecipes} = props;
  return recipes ? (
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
const styles = StyleSheet.create({
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
    zIndex: -1,
  },
});

Landing.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})),
  user: PropTypes.string,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
};

Landing.defaultProps = {
  recipes: null,
  user: null,
};
