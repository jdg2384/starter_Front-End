import React, { Component } from 'react';
import { connect } from 'react-redux';
// Redux Actions
import {
    login,
} from '../Store/Actions';

const obj ={
    email: 'joe@joe.com',
    password: 'river'
}

class PageOne extends Component {
    render() {
        //console.log(this.props)
        return (
            <div>
                <h2>Page One</h2>
                <input type="submit" defaultValue="Submit"
                    onClick={()=> this.props.login(obj)}
                />    
            </div>
        );
    }
}

const mapStateToProps = state => {
    let { info } = state.auth
    return { 
       info
    };
};
export default connect(mapStateToProps, {
    login
})(PageOne);