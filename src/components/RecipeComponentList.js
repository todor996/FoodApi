import RecipeComponent from './RecipeComponent';
import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const RecipeComponentList = ({recipeList, user}) => (
  <ScrollView style={[styles.scrollView]}>
    {recipeList.map(recipe => (
      <RecipeComponent recipe={recipe} user={user} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },
});

export default RecipeComponentList;
