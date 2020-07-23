import React, { Component } from 'react'

import SEO from "../components/seo"
import BlueTheme from "../themes/blue-theme"
import { graphql } from "gatsby"

export default class IndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      val: "Value"
    }
  }
  componentDidMount(){
    this.setState({val: "Value Değişti"});
  }
  render() {
    return (
      <>
        {this.state.val}
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