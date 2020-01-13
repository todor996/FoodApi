import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  dislikeRecipe as dislikeRecipeAction,
  getRecipes as getRecipesAction,
  getUserRecipes as getUserRecipesAction,
  likeRecipe as likeRecipeAction,
} from '../actions/RecipeActions';
import {Landing} from '../components/Landing';
import {liked, owned, allRecipes, search} from '../constants/consts';

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {getRecipes, auth, getUserRecipes} = this.props;
    getRecipes();
    getUserRecipes(auth.user.id);
  }

  render() {
    const {likeRecipe, dislikeRecipe, show, recipes, auth} = this.props;
    const showRecipes =
      show === liked
        ? recipes.likedRecipes
        : show === owned
        ? recipes.ownedRecipes
        : show === allRecipes
        ? recipes.recipes
        : show === search
        ? recipes.search
        : null;
    console.log(recipes.recipes);
    return showRecipes ? (
      <Landing
        user={auth.user}
        like={likeRecipe}
        likedRecipes={recipes.likedRecipes}
        dislike={dislikeRecipe}
        recipes={showRecipes}
      />
    ) : null;
  }
}

RecipeList.propTypes = {
  auth: PropTypes.shape({}),
  show: PropTypes.string,
  recipes: PropTypes.shape({}),
  getRecipes: PropTypes.func.isRequired,
  getUserRecipes: PropTypes.func.isRequired,
  likeRecipe: PropTypes.func.isRequired,
  dislikeRecipe: PropTypes.func.isRequired,
};

RecipeList.defaultProps = {
  recipes: null,
  show: null,
  auth: null,
};

const mapStateToProps = state => ({
  recipes: state.recipeReducer,
  auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getRecipesAction()),
  getUserRecipes: id => dispatch(getUserRecipesAction(id)),
  likeRecipe: (recipeId, userId) =>
    dispatch(likeRecipeAction(recipeId, userId)),
  dislikeRecipe: (recipeId, userId) =>
    dispatch(dislikeRecipeAction(recipeId, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeList);
