import React, { useEffect } from "react"

import SEO from "../components/seo"
import BlueTheme from "../themes/blue-theme"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  useEffect(() => {
    //console.log(document.querySelector('link[rel="manifest"]'));
  });
  return (
    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <BlueTheme/>
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
