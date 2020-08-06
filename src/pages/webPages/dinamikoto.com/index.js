import React, { Component } from 'react'
import BlueTheme from '../../../themes/blue-theme'
import { StaticQuery, graphql } from "gatsby"

export default class DinamikOto extends Component {
    render() {
        return (
            <>
            Değişiklik
              <BlueTheme/>
                <StaticQuery
                  query={graphql`
                    {
                        allFile {
                        edges {
                            node {
                            name
                            dir
                            }
                        }
                        }
                    }
                    `}
                  render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
                ></StaticQuery>
            </>
        )
    }
}
