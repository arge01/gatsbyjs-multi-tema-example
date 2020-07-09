import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StaticQuery, graphql } from "gatsby"

class BlueTheme extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                { `Mavi Tema ${this.props.data}` }
            </div>
        )
    }
}

const mapStateToProps = ({data}) => {
    return {
        data
    }
}

export default connect(mapStateToProps)(BlueTheme);
