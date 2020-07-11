import React from "react"
import { Router } from "@reach/router"

import SEO from "../components/seo"
import { Provider } from "react-redux"
import configureStore from '../redux/configure/index'
import BlueTheme from "../themes/blue-theme"
import Login from "./login"
import { graphql } from "gatsby"

const store = configureStore();

const IndexPage = ({data}) => (
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

export const data = graphql`
  {
    site {
      buildTime
    }
    sitePlugin {
      packageJson {
        version
        description
        license
      }
    }
    sitePage {
      componentPath
    }
    directory {
      dev
      name
      nlink
      root
      modifiedTime
    }
    myNodeType {
      platform
      totalmem
      arch
      panel
    }
  }
`

export default IndexPage
