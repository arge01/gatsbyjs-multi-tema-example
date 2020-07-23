import React, { Component } from 'react'

import SEO from "../components/seo"
import BlueTheme from "../themes/blue-theme"
import { graphql } from "gatsby"

export default class IndexPage extends Component {
  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <BlueTheme/>
      </>
    )
  }
}

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