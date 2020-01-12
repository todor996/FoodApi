import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Joi from 'joi';

import {Actions} from 'react-native-router-flux';
import {dark, lighter, primary} from '../constants/consts';
import { signUp as signUpApi } from '../api/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  validateForm = () => {
    const {email, firstName, lastName, password} = this.state;
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({minDomainAtoms: 2})
        .required()
        .error(new Error('Invalid email format.')),
      firstName: Joi.string()
        .required()
        .error(new Error('First name is required.')),
      lastName: Joi.string()
        .required()
        .error(new Error('Last name is required.')),
      password: Joi.string()
        .required()
        .error(new Error('Password is required.')),
    });

    const result = Joi.validate(
      {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
      },
      schema,
    );

    if (result.error && result.error.message) {
      this.setState({error: result.error.message});
      setTimeout(() => {
        this.setState({error: ''});
      }, 3000);
    }
    return !result.error;
  };

  login() {
    Actions.pop();
  }

  register = () => {
    const {email, password, firstName, lastName} = this.state;
    if (this.validateForm()) {
      signUpApi(email, password, firstName, lastName).then(() => Actions.pop());
    }
  };

  handleEmailChange = value => {
    this.setState({email: value});
  };

  handlePasswordChange = value => {
    this.setState({password: value});
  };

  handleFirstNameChange = value => {
    this.setState({firstName: value});
  };

  handleLastNameChange = value => {
    this.setState({lastName: value});
  };

  render() {
    const {email, password, error, firstName, lastName} = this.state;
    return (
      <View style={styles.loginSection}>
        <View style={styles.container}>
          <Text style={styles.primaryText}>Sign up</Text>
          <Text style={error ? styles.errorMessage : 'hidden'}>{error}</Text>
          <TextInput
            type="email"
            style={styles.inputBox}
            placeholder="Email"
            name="email"
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="#002f6c"
            selectionColor="#fff"
            keyboardType="email-address"
            value={email}
            onChangeText={value => this.handleEmailChange(value)}
          />
          <TextInput
            type="password"
            style={styles.inputBox}
            placeholderTextColor="#002f6c"
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            name="password"
            secureTextEntry
            value={password}
            onChangeText={value => this.handlePasswordChange(value)}
          />
          <TextInput
            type="text"
            style={styles.inputBox}
            placeholderTextColor="#002f6c"
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="First name"
            name="firstName"
            value={firstName}
            onChangeText={value => this.handleFirstNameChange(value)}
          />
          <TextInput
            type="text"
            style={styles.inputBox}
            placeholderTextColor="#002f6c"
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Last name"
            name="lastName"
            value={lastName}
            onChangeText={value => this.handleLastNameChange(value)}
          />
          <TouchableOpacity onPress={this.register} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>Already registered? </Text>
          <TouchableOpacity onPress={this.login}>
            <Text style={styles.signupButton}>Log in</Text>
          </TouchableOpacity>
        </View>
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
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: primary,
    fontSize: 20,
  },
  errorMessage: {
    color: 'red',
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: primary,
    color: '#fff',
    width: '40.5%',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 40,
  },
  loginButtonText: {
    textAlignVertical: 'center',
    fontSize: 16,
    alignSelf: 'center',
  },
  signupButton: {
    color: dark,
  },
});

Signup.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  signUp: payload => signUpApi(payload),
});

export default connect(
  null,
  mapDispatchToProps,
)(Signup);
