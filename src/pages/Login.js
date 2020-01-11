import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Joi from 'joi';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {dark, lighter, primary} from '../constants/consts';
import {login as loginAction} from '../actions/AuthActions';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  signUp = () => {
    Actions.signUp();
  };

  log = () => {
    if (this.validateForm()) {
      this.handleSuccess();
    }
  };

  handleSuccess = () => {
    const {login} = this.props;
    const {email, password} = this.state;
    login({email, password}).then(() => {
      Actions.home();
    });
  };

  handleEmailChange = value => {
    this.setState({email: value});
  };

  handlePasswordChange = value => {
    this.setState({password: value});
  };

  validateForm = () => {
    const {email, password} = this.state;
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({minDomainAtoms: 2})
        .required()
        .error(new Error('Invalid email format.')),
      password: Joi.string()
        .required()
        .error(new Error('Password is required.')),
    });

    const result = Joi.validate({email: email, password: password}, schema);

    if (result.error && result.error.message) {
      this.setState({error: result.error.message});
      setTimeout(() => {
        this.setState({error: ''});
      }, 3000);
    }
    return !result.error;
  };

  render() {
    const {email, password, error} = this.state;
    return (
      <View style={styles.loginSection}>
        <View style={styles.container}>
          <Text style={styles.primaryText}>Log in</Text>
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
          <TouchableOpacity onPress={this.log} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign in</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>Not yet registered? </Text>
          <TouchableOpacity onPress={this.signUp}>
            <Text style={styles.signupButton}>Sign up</Text>
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
  }
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

Login.defaultProps = {};

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(loginAction(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
