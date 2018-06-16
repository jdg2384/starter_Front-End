import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Redux
import { Provider } from 'react-redux' //, Store 
import { createStore, applyMiddleware } from 'redux';
import Reducer from './Store/Reducers';
import ReduxThunk from 'redux-thunk';

import history from './Containers/History'
//Router
import {
    Router,
    Route,
    BrowserRouter
} from "react-router-dom";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
//App
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
//reducer, 
const store = createStore(Reducer, {}, applyMiddleware(ReduxThunk));

//const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
,document.getElementById('root'));
registerServiceWorker();

