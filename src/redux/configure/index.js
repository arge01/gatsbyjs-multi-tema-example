import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  return createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
}

export default configureStore;
