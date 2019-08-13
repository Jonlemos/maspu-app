import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './layouts/Login/Login';
import Dashboard from './layouts/Dashboard/Dashboard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;