import RecipeComponent from './RecipeComponent';
import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const RecipeComponentList = ({
  recipeList,
  user,
  like,
  dislike,
  likedRecipes,
}) => (
  <ScrollView style={[styles.scrollView]}>
    {recipeList.map(recipe => (
      <RecipeComponent
        recipe={recipe}
        user={user}
        like={like}
        dislike={dislike}
        likedRecipes={likedRecipes}
      />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },
});

export default RecipeComponentList;
