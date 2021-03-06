import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import t from 'tcomb-form-native';
import {Actions} from 'react-native-router-flux';
import {dark, lighter, primary} from '../constants/consts';
import {createRecipe as createRecipeAction} from '../actions/RecipeActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Form = t.form.Form;

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
};

const options = {
  stylesheet: formStyles,
};

const Recipe = t.struct({
  title: t.String,
  image: t.String,
  tags: t.String,
  prepTime: t.Integer,
  ingredients: t.String,
  preparation: t.String,
  servings: t.Integer,
  kcal: t.Integer,
  carbs: t.Integer,
  fat: t.Integer,
  protein: t.Integer,
});
class CreateRecipe extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    const {auth, createRecipe} = this.props;
    const value = this._form.getValue();
    if (value) {
      const ingredients = value.ingredients.split(';');
      const newRecipe = {
        ...value,
        tags: value.tags.split(',').map(tag => ({name: tag})),
        preparationSteps: value.preparation.split(';').map((prep, index) => {
          return {
            orderNum: index,
            preparation: prep,
            ingredients: ingredients[index].split(',').map(ingredient => ({
              name: ingredient,
              price: Math.floor(Math.random() * 100),
            })),
          };
        }),
      };
      delete newRecipe.ingredients;
      delete newRecipe.preparation;
      createRecipe(newRecipe, auth.user.id);
      Actions.pop();
    }
  };

  render() {
    return (
      <View style={styles.loginSection}>
        <ScrollView contentContainerStyle={styles.container}>
          <Form type={Recipe} options={options} ref={c => (this._form = c)} />
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={styles.createRecipeButton}>
            <Text style={styles.createButtonText}>Create recipe</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginSection: {
    padding: 30,
  },
  signupText: {
    textAlign: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: lighter,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: lighter,
  },
  primaryText: {
    color: primary,
    fontSize: 20,
  },
  errorMessage: {
    color: 'red',
    alignSelf: 'center',
  },
  createRecipeButton: {
    backgroundColor: primary,
    color: '#fff',
    width: '40.5%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  createButtonText: {
    textAlignVertical: 'center',
    fontSize: 16,
    alignSelf: 'center',
  },
  signupButton: {
    color: dark,
  },
});

CreateRecipe.propTypes = {
  createRecipe: PropTypes.func.isRequired,
  auth: PropTypes.shape({}),
};

CreateRecipe.defaultProps = {
  auth: null,
};

const mapStateToProps = state => ({
  auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  createRecipe: (payload, userId) => dispatch(createRecipeAction(payload, userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRecipe);
