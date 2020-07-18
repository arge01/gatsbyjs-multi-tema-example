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
            manifest: "You Don't Have A Manifest",
            getListData: []
        }
    }
    componentDidMount() {
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
                    <Button variant="warning" onClick={ () => this.props.dispatch(nextData()) }>Change Reducers</Button>
                </p>
                <p>
                    { this.state.manifest }
                </p>
                <pre>
                  <b>Users: </b>
                  {
                      this.props.dispatch(getData())
                  }
                  {JSON.stringify(this.props.getListData, null, 4)}
                </pre>
            </Jumbotron>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      ...bindActionCreators({ nextData, getData }, dispatch),
    }
};

const mapStateToProps = ({getListData}) => ({getListData});

export default connect( mapStateToProps, mapDispatchToProps )(BlueTheme);
