import React, { Component } from 'react';
import { connect } from 'react-redux';
// Redux Actions
import {
    projectInfo,
} from '../Store/Actions';

const obj ={
    email: 'joe@joe.com',
    password: 'river'
}
 

class PageOne extends Component {
    
    render() {
        console.log('render')
        return (
            <div>
                <h2>Page One</h2>
                <h2>Joe First Test Using Source Tree</h2>
                <h3>Test SourceTree</h3>
                <input type="submit" defaultValue="Submit"
                    onClick={()=> this.props.login(obj)}
                />    
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { info } = state.auth
    console.log(state)
    return { 
       info
    };
};
export default connect(mapStateToProps, {
    projectInfo
})(PageOne);
