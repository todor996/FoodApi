import {AsyncStorage} from 'react-native';

export class AuthService {
  static getAuthTokenFromStorage() {
    return AsyncStorage.getItem('token');
  }

  static setAuthToken(token) {
    return AsyncStorage.setItem('token', token);
  }

  static removeToken() {
    return AsyncStorage.removeItem('token');
  }
}
