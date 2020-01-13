import {LOGIN_SUCCESS} from '../constants/actions';
import {login as loginApi, signUp as signUpApi} from '../api/auth';
import {AuthService} from '../services/AuthService';

export const login = ({email, password}) => dispatch => {
  return loginApi(email, password)
    .then(async res => {
      console.log(res)
      dispatch({type: LOGIN_SUCCESS, payload: res});
      await AuthService.setAuthToken(res.token);
    })
    .catch(error => {
      console.log(error.toString());
    });
};
