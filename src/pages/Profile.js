import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {liked, owned, primary} from '../constants/consts';
import RecipeList from './RecipeList';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {showRecipes: null};
  }
  handleLikedRecipesPress = () => {
    this.setState({show: liked});
  };
  handleOwnedRecipesPress = () => {
    this.setState({show: owned});
  };
  render() {
    const {auth} = this.props;
    const {show} = this.state;
    return (
      <View style={styles.wrapper}>
        <Text>Email: {auth.user.email}</Text>
        <Text>FirstName: {auth.user.firstName}</Text>
        <Text>LastName: {auth.user.lastName}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleLikedRecipesPress}>
            <Text style={styles.buttonText}>Liked</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleOwnedRecipesPress}>
            <Text style={styles.buttonText}>Owned</Text>
          </TouchableOpacity>
        </View>
        <RecipeList show={show} />
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
  },
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
};

Profile.defaultProps = {
  auth: null,
};

const mapStateToProps = state => ({
  auth: state.authReducer,
});

export default connect(
  mapStateToProps,
  null,
)(Profile);
