import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware()
);

const configureStore = () => {
  return createStore(reducers, enhancer);
}

export default configureStore;
