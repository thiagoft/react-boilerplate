import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import Main from './components/Main';
import Login from './components/login/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render = {props => (
        localStorage.getItem('auth-token') !== null ?
        (<Component {...props}/>) : (<Redirect to={{pathname: '/'}}/>)
    )}/>
)

ReactDOM.render(
    (
        <MuiThemeProvider>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Login} props={this.props} />
                    <PrivateRoute path='/main' component={Main} props={this.props} />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    ),
    document.getElementById('root')
);
registerServiceWorker();
