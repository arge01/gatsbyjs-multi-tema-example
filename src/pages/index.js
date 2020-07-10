import React from "react"
import { Router } from "@reach/router"

import SEO from "../components/seo"
import { Provider } from "react-redux"
import configureStore from '../redux/configure/index'
import BlueTheme from "../themes/blue-theme"
import Login from "./login"

const store = configureStore();

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Provider store={store}>
        <Router>
          <Login path="/login" />
          <BlueTheme path="/" />
        </Router>
      </Provider>
  </>
)

export default IndexPage
