import React, {Component} from 'react';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {allRecipes, lighter, primary} from '../constants/consts';
import {Actions} from 'react-native-router-flux';
import RecipeList from './RecipeList';

const Dashboard = () => {
  const onPressAdd = () => {
    Actions.createRecipe();
  };

  return (
    <View>
      <RecipeList show={allRecipes} />
      <TouchableOpacity style={styles.likeRecipe} onPress={onPressAdd}>
        <FontAwesomeIcon icon={faPlusCircle} style={styles.likeThumbs} />
      </TouchableOpacity>
      <ImageBackground
        source={require('../images/showcase.jpg')}
        style={[styles.fixed, styles.container]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Dashboard;
