import React, { Component } from 'react';
import { connect } from 'react-redux';
// Redux Actions
import {
    projectInfo,
} from '../Store/Actions';

class Restricted extends Component {
    render() {
        console.log('Props = ',this.props)
        return (
            <div>
                <h2>Restricted</h2>   
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state = ',state)
    let { info } = state.auth
    return { 
       info
    };
};
export default connect(mapStateToProps, {
    projectInfo
})(Restricted);
