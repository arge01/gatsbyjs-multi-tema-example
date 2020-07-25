import React, { Component } from 'react'

import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"

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
        <pre>
          <Link to="webPages/dinamikoto.com">Dinamik Oto</Link>
          <br/>
          <Link to="webPages/mepayedekparca.com">Mepa Yedek Parça</Link>
        </pre>
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