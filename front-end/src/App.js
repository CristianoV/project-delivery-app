import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Redirect from './Components/Redirect';
import Login from './Components/Login';
import RegisterComponent from './Components/Register';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ RegisterComponent } />
      </Switch>
    );
  }
}
