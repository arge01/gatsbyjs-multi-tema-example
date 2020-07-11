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
        sitePlugin {
            pluginOptions {
                name
                project
                author
                author_link
                short_name
                start_url
                licence
            }
        }
    }
`

export default IndexPage
