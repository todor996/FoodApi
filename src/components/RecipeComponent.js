import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import RecipeCard from './RecipeCard';
import {light, lighter, primary} from '../constants/consts';
import {Actions} from 'react-native-router-flux';

const RecipeComponent = ({recipe, user, like, dislike, likedRecipes}) => {
  const loggedIn = !!user;
  const owner = recipe.UserId === user;
  const liked = !!(
    likedRecipes &&
    likedRecipes.find(likedRecipe => recipe.id === likedRecipe.id)
  );

  const onPress = () => {
    !liked ? like(recipe.id, user) : dislike(recipe.id, user);
  };

  const onClickDetailed = id => {
    Actions.detailed({id: id});
  };

  return (
    <View style={styles.recipeBulkSection}>
      <RecipeCard recipe={recipe} />
      {loggedIn && (
        <TouchableOpacity
          onPress={() => onClickDetailed(recipe.id)}
          style={styles.button}>
          <Text style={styles.instructions}>
            Detailed preparation instruction
          </Text>
        </TouchableOpacity>
      )}
      {loggedIn && !owner && (
        <TouchableOpacity style={styles.likeRecipe} onPress={onPress}>
          <FontAwesomeIcon
            icon={liked ? faThumbsDown : faThumbsUp}
            style={styles.likeThumbs}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RecipeComponent;

const styles = StyleSheet.create({
  recipeBulkSection: {
    margin: 10,
    backgroundColor: light,
    width: 300,
    height: 345,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  button: {
    width: '100%',
    borderWidth: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  instructions: {
    height: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: primary,
    textAlignVertical: 'center',
  },
  recipeBulkSection__instructions_hover: {
    backgroundColor: 'blue',
    color: 'red',
  },
  likeRecipe: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: lighter,
    padding: 4,
    paddingRight: 0,
    margin: 0,
    width: 22,
    borderRadius: 50,
  },
  likeThumbs: {
    color: primary,
  },
});
