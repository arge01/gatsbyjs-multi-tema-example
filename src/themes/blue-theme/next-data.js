import React, { Component } from 'react'
import { connect } from 'react-redux';

class NextVar extends Component {
    render() {
        return (
            <div>
                {`Mavi Tema ${this.props.data}`}
            </div>
        )
    }
}

const mapStateToProps = ({ data }) => ({data});

export default connect(mapStateToProps)(NextVar);
