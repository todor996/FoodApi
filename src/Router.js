import React, {Component} from 'react';
import {Router, Stack, Scene, Drawer} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import DetailedRecipe from './pages/DetailedRecipe';
import CreateRecipe from './pages/CreateRecipe';
import Sidebar from './components/Sidebar';
import SearchRecipes from './pages/SearchRecipes';
export default class Routes extends Component {
  render() {
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        navigationBarStyle={{backgroundColor: '#1565c0'}}
        titleStyle={{color: 'white'}}
        tintColor="white">
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="signUp" component={Signup} title="Sign up" />
          <Drawer
            hideNavBar={true}
            key="drawer"
            drawerPosition="left"
            contentComponent={Sidebar}
            drawerWidth={400}>
            <Scene key="dashboard" component={Dashboard} title="Dashboard" />
            <Scene key="profile" component={Profile} title="Profile" />
            <Scene key="search" component={SearchRecipes} title="Search" />
            <Scene
              key="createRecipe"
              component={CreateRecipe}
              title="Create Recipe"
            />
          </Drawer>
          <Scene key="detailed" component={DetailedRecipe} title="Detailed"/>
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
