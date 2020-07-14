import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { nextData, getData } from "../../redux/index";
import NextVar from "./next-data";
import { Button, Jumbotron } from 'react-bootstrap';

class BlueTheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manifest: "You Don't Have A Manifest"
        }
    }
    componentDidMount() {
        this.props.dispatch(getData());
        if ( document.querySelector('link[rel="manifest"]') ) {
            this.setState({manifest: "You Have A Manifest"})
        } else {
            this.setState({manifest: "You Don't Have A Manifest"})
        }
    }

    render() {
        return (
            <Jumbotron>
                <p>
                    <NextVar/>
                </p>
                <p>
                    <Button variant="warning" onClick={ () => this.props.dispatch(nextData()) }>Next Data</Button>
                </p>
                <p>
                    {this.state.manifest}
                </p>
            </Jumbotron>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators({ nextData, getData }, dispatch),
    }
};

const mapStateToProps = ({getListData}) => getListData

export default connect(mapDispatchToProps)(BlueTheme);
