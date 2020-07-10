import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StaticQuery, graphql } from "gatsby";

class BlueTheme extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                {`Mavi Tema ${this.props.data}`}
            <StaticQuery
                query={graphql`
                    {
                        myNodeType {
                        mac {
                            ...MyNodeTypeMacFragment
                        }
                        }
                    }

                    fragment MyNodeTypeMacFragment on MyNodeTypeMac {
                        Loopback_Pseudo_Interface_1 {
                          address
                          netmask
                          family
                          mac
                          internal
                          cidr
                          scopeid
                        }
                      }
                `}
                
                render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
            ></StaticQuery>
            </div>
        )
    }
}

const mapStateToProps = ({ data }) => {
    return {
        data
    }
}

export default connect(mapStateToProps)(BlueTheme);
