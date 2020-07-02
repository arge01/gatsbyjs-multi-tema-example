import React from "react"
import { Router } from "@reach/router"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import { Provider } from "react-redux"
import configureStore from '../redux/configure/index';
import BlueTheme from "../themes/blue-theme"

const store = configureStore();

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Provider store={store}>
        <Router>
          <BlueTheme path="/" />
        </Router>
      </Provider>
  </>
)

export default IndexPage
