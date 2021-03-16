import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './components/HomeMenu/HomeMenu';
import Achievement from './page/Achievement';
import Login from './page/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component = {Login} />
        <Route path="/home" exact component={Home} />
        <Route path = '/achievement' exact component={Achievement} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
