import React, {Component} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';
import RecipeSearch from '../components/RecipeSearch';
import {searchRecipes as searchRecipesAction} from '../actions/RecipeActions';
import RecipeList from './RecipeList';
import {search} from '../constants/consts';
class SearchRecipes extends Component {
  render() {
    const {searchRecipes} = this.props;
    return (
      <ScrollView style={{height: '100%'}}>
        <RecipeSearch searchRecipes={searchRecipes} />
        <RecipeList show={search} />
      </ScrollView>
    );
  }
}

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
