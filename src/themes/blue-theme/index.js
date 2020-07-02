import React, { Component } from 'react';
import { connect } from 'react-redux';

class BlueTheme extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                { `Mavi Tema ${this.props.new_data}, ${this.props.next_data}` }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        new_data: state.newData,
        next_data: state.nextData,
    }
}

export default connect(mapStateToProps)(BlueTheme);
