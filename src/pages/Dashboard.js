import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
});

export default Dashboard;
