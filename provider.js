
import React from "react"
import { Provider } from "react-redux"

import configureStore from './src/redux/configure/index';

import { ApolloProvider } from '@apollo/client';
import { client } from "./src/apollo/client"


// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = configureStore();
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{element}</Provider>
    </ApolloProvider>
  )
}
