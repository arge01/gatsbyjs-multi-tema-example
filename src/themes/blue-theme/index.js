import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { nextData } from "../../redux/index";
import NextVar from "./next-data";
import { Button, Jumbotron } from 'react-bootstrap';

class BlueTheme extends Component {

    render() {
        console.log(this.props);
        return (
            <Jumbotron>
                <p>
                    <NextVar/>
                </p>
                <p>
                    <Button variant="warning" onClick={ () => this.props.dispatch(nextData()) }>Next Data</Button>
                </p>
            </Jumbotron>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {actions: bindActionCreators(nextData, dispatch)}
};

export default connect(mapDispatchToProps)(BlueTheme);
