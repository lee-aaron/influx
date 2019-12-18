import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import handleAuth from './handleAuth';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    handleAuth: handleAuth
  });
}