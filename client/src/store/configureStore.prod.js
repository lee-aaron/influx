import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import * as saga from '../sagas';

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(thunk, router, sagaMiddleware);

function configureStore(initialState: {} = {}) {
  const store = createStore(rootReducer, initialState, enhancer);
  saga.registerWithMiddleware(sagaMiddleware);
  return store;
}

export default { configureStore, history };