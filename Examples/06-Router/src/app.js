import React, { Component } from 'react';
import { Routes } from './routes';
import { Switch, Route } from 'react-router-dom';
import routes from './routes.config';

export class App extends Component {
    render() {
        return <div>
        <Routes />
        <Switch>
            {routes.map((route) => <Route exact path={route.path} component={route.component} /> )} 
        </Switch>
        
    </div>;
    }
}




