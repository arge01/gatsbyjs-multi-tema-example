import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <>
                Login User {`Mavi Tema ${this.props.data}`}
            </>
        )
    }
}

const mapStateToProps = ({ data }) => {
    return {
        data
    }
}

export default connect(mapStateToProps)(Login);
