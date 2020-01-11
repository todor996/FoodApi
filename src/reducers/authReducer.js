import {LOGIN_SUCCESS} from '../constants/actions';

const initialState = {
  token: '',
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const {payload} = action;
      return {
        ...state,
        token: payload.token,
        user: payload.user,
      };
    }
    default:
      return state;
  }
};
