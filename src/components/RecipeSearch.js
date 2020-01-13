import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import t from 'tcomb-form-native';
import {dark, lighter, primary} from '../constants/consts';
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
  query: t.String,
  prepTime: t.maybe(t.Integer),
  servings: t.maybe(t.Integer),
  kcal: t.maybe(t.Integer),
  carbs: t.maybe(t.Integer),
  fat: t.maybe(t.Integer),
  protein: t.maybe(t.Integer),
});
class RecipeSearch extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    const {searchRecipes} = this.props;
    const value = this._form.getValue();
    if (value) {
      const modifiedValue = Object.entries(value).reduce((a,[k,v]) => (v ? {...a, [k]:v} : a), {})

      searchRecipes(modifiedValue);
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
            <Text style={styles.createButtonText}>Search</Text>
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

export default RecipeSearch;
