import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
export default class Routes extends Component {
  render() {
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        hideNavBar={false}
        navigationBarStyle={{backgroundColor: '#1565c0'}}
        titleStyle={{color: 'white'}}>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="signUp" component={Signup} title="Sign up" />
          <Scene key="home" component={Profile} title="Dashboard" />
        </Scene>
      </Router>
    );
  }
}

const styles = {
  barButtonIconStyle: {
    tintColor: 'white',
  },
};
