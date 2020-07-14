import React, { Component } from 'react'
import { connect } from 'react-redux';

class NextVar extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {`Mavi Tema ${this.props.data}`}
            </div>
        )
    }
}

const mapStateToProps = ({ data, getListData }) => {
    return {
        data,
        getListData
    }
}

export default connect(mapStateToProps)(NextVar);
