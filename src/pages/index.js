import React, { useEffect } from "react"
import { Router } from "@reach/router"

import SEO from "../components/seo"
import { Provider } from "react-redux"
import configureStore from '../redux/configure/index'
import BlueTheme from "../themes/blue-theme"
import Login from "./login"
import { graphql } from "gatsby"

const store = configureStore();

const IndexPage = ({data}) => {
  useEffect(() => {
    //console.log(document.querySelector('link[rel="manifest"]'));
  });
  return (
    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <Provider store={store}>
          <Router>
            <Login path="/login" />
            <BlueTheme path="/" />
          </Router>
        </Provider>
    </>
  )
};

export const data = graphql`
  {
    allFile(filter: {absolutePath: {regex: "/manifest/"}}) {
      edges {
        node {
          name
          nlink
          publicURL
          root
          absolutePath
          base
          extension
        }
      }
    }
  }
`

export default IndexPage
