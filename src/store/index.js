import {applyMiddleware, createStore, compose} from 'redux';

import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

export default createStore(
  reducers,
  {},
  compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
