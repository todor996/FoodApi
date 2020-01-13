import React, {Component} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import RecipeSearch from '../components/RecipeSearch';
import {searchRecipes as searchRecipesAction} from '../actions/RecipeActions';
import RecipeList from './RecipeList';
import {search} from '../constants/consts';
class SearchRecipes extends Component {
  render() {
    const {searchRecipes} = this.props;
    return (
      <View>
        <ScrollView style={{height: '100%'}}>
          <RecipeSearch searchRecipes={searchRecipes} />
          <RecipeList show={search} />
        </ScrollView>
        <ImageBackground
          source={require('../images/showcase.jpg')}
          style={[styles.fixed, styles.container]}
        />
      </View>
    );
  }
}

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

SearchRecipes.propTypes = {
  recipes: PropTypes.shape({}),
  id: PropTypes.string,
};

SearchRecipes.defaultProps = {
  recipes: null,
  id: null,
};

const mapStateToProps = state => ({
  recipes: state.recipeReducer,
});

const mapDispatchToProps = dispatch => ({
  searchRecipes: options => dispatch(searchRecipesAction(options)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchRecipes);
