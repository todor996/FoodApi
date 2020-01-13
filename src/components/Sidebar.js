import React, {Component} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Left, Right, List, ListItem, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {LOGOUT} from '../constants/actions';

class Sidebar extends Component {
  handleDashboard = () => {
    Actions.drawerClose();
    Actions.dashboard();
  };

  handleProfile = () => {
    Actions.drawerClose();
    Actions.profile();
  };

  handleLogout = () => {
    const {logout} = this.props;
    Actions.reset('login');
    logout();
  };

  handleSearch = () => {
    Actions.search();
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
        <List>
          <ListItem icon="menu">
            <Left>
              <TouchableOpacity onPress={this.handleDashboard}>
                <Text>Dashboard</Text>
              </TouchableOpacity>
            </Left>

            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <TouchableOpacity onPress={this.handleProfile}>
                <Text>Profile</Text>
              </TouchableOpacity>
            </Left>

            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <TouchableOpacity onPress={this.handleSearch}>
              <Text>Search</Text>
              </TouchableOpacity>
            </Left>

            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <TouchableOpacity onPress={this.handleLogout}>
              <Left>
                <Text>Logout</Text>
              </Left>
            </TouchableOpacity>

            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </SafeAreaView>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({type: LOGOUT}),
});

export default connect(
  null,
  mapDispatchToProps,
)(Sidebar);
