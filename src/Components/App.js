import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
//Router
import {
Route
} from "react-router-dom";
//Actions
import {

} from '../Store/Actions';

import PageOne from './PageOne'
import Restricted from './Restricted'

class App extends Component {

    constructor(props){
        super(props)
    }

    componentWillMount(){
        
    }

    render() {
      console.log('app.js props  = ',this.props)
        return (
            <div className="App">
                <h2>App.js page</h2>
                <Route path="/" component={PageOne} />
                <Route path="/restricted" component={Restricted} />
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

})(App);
