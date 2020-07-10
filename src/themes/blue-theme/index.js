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
                            VirtualBox_Host_Only_Network {
                            mac
                            address
                            cidr
                            family
                            internal
                            netmask
                            scopeid
                            }
                            Loopback_Pseudo_Interface_1 {
                            mac
                            address
                            family
                            netmask
                            scopeid
                            }
                            VirtualBox_Host_Only_Network__2 {
                            address
                            internal
                            mac
                            netmask
                            scopeid
                            }
                            Wi_Fi {
                            mac
                            address
                            netmask
                            }
                        }
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
