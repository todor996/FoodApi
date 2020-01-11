import React, {Component} from 'react';
import {Landing} from '../components/Landing';
import PropTypes from 'prop-types';
import {
  getRecipes as getRecipesAction,
  getUserRecipes as getUserRecipesAction,
} from '../actions/RecipeActions';
import {connect} from 'react-redux';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {lighter, primary} from '../constants/consts';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {showRecipes: null};
  }
  componentDidMount() {
    const {getRecipes, auth, getUserRecipes} = this.props;
    getRecipes();
    getUserRecipes(auth.user.id);
  }

  handleLikedRecipesPress = () => {
    const {recipes} = this.props;
    this.setState({showRecipes: recipes.likedRecipes});
  };
  handleOwnedRecipesPress = () => {
    const {recipes} = this.props;
    this.setState({showRecipes: recipes.ownedRecipes});
  };
  render() {
    const {auth} = this.props;
    const {showRecipes} = this.state;
    return (
      <View style={styles.wrapper}>
        <Text>Email: {auth.user.email}</Text>
        <Text>FirstName: {auth.user.firstName}</Text>
        <Text>LastName: {auth.user.lastName}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={this.handleLikedRecipesPress}>
            <Text style={styles.buttonText}>Liked</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleOwnedRecipesPress}>
            <Text style={styles.buttonText}>Owned</Text>
          </TouchableOpacity>
        </View>
        {showRecipes && showRecipes.length > 0 && (
          <Landing recipes={showRecipes} user={auth.user.id} />
        )}
        <ImageBackground
          source={require('../images/showcase.jpg')}
          style={[styles.fixed, styles.container]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
    zIndex: -1,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  row: {
      flexDirection: 'row',
  }  ,
  button: {
    margin: 5,
    backgroundColor: primary,
    color: '#fff',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 40,
  },
  buttonText: {
    textAlignVertical: 'center',
    fontSize: 16,
    alignSelf: 'center',
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
Profile.propTypes = {
  auth: PropTypes.shape({}),
  recipes: PropTypes.shape({}),
  getRecipes: PropTypes.func.isRequired,
  getUserRecipes: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  recipes: null,
  auth: null,
};

const mapStateToProps = state => ({
  recipes: state.recipeReducer,
  auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getRecipesAction()),
  getUserRecipes: id => dispatch(getUserRecipesAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);