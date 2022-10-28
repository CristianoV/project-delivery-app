import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Redirect from './Components/Redirect';
import Login from './Components/Login';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/login" component={ Login } />
      </Switch>
    );
  }
}
