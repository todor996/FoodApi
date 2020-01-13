import React, {Component} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getDetailedRecipe as getDetailedRecipeAction} from '../actions/RecipeActions';
import {View} from 'react-native';
import RecipeCard from '../components/RecipeCard';
import PreparationInstruction from '../components/PreparationInstruction';
class DetailedRecipe extends Component {
  componentDidMount() {
    const {id, getDetailedRecipe} = this.props;
    getDetailedRecipe(id);
  }
  render() {
    const {
      recipes: {detailed},
    } = this.props;
    return detailed ? (
      <View style={{height: '100%'}}>
        <RecipeCard recipe={detailed} />
        <PreparationInstruction prepInstructions={detailed.PreparationSteps} />
      </View>
    ) : null;
  }
}

DetailedRecipe.propTypes = {
  recipes: PropTypes.shape({}),
  id: PropTypes.string,
  getDetailedRecipe: PropTypes.func.isRequired,
};

DetailedRecipe.defaultProps = {
  recipes: null,
  id: null,
};

const mapStateToProps = state => ({
  recipes: state.recipeReducer,
});

const mapDispatchToProps = dispatch => ({
  getDetailedRecipe: recipeId => dispatch(getDetailedRecipeAction(recipeId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailedRecipe);
