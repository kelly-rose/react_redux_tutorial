import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

// import {createLogger} from 'redux-logger';

import App from './components/app';
import reducers from './reducers';
import Welcome from './components/welcome';

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/Signout';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import {AUTH_USER} from './actions/types';
// const logger= createLogger();

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if(token){
    //we need to update application state
    store.dispatch({type:AUTH_USER});
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Welcome}/>
                <Route path="signin" component={Signin}/>
                <Route path="signup" component={Signup}/>
                <Route path="signout" component={Signout}/>
                <Route path="feature" component={RequireAuth(Feature)}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container')
);
