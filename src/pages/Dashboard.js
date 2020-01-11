import React, {Component} from 'react';
import {Landing} from '../components/Landing';
import PropTypes from 'prop-types';
import {getRecipes as getRecipesAction} from '../actions/RecipeActions';
import {connect} from 'react-redux';

class Dashboard extends Component {
  componentDidMount() {
    const {getRecipes} = this.props;
    getRecipes();
  }

  render() {
    const {recipes, auth} = this.props;
    return <Landing recipes={recipes.recipes} user={auth.user.id} />;
  }
}

Dashboard.propTypes = {
  auth: PropTypes.shape({}),
  recipes: PropTypes.shape({}),
  getRecipes: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  recipes: null,
  auth: null,
};

const mapStateToProps = state => ({
  recipes: state.recipeReducer,
  auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getRecipesAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
