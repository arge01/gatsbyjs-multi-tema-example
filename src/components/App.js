import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import configureStore from '../redux/configure/index';

const store = configureStore();

import Layout from './Layout';

const App = ({ children }) => (
  <Provider store={store}>

  </Provider>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
