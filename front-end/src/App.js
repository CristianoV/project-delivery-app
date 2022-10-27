import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Redirect from './Components/Redirect';
import Teste from './Components/Teste';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Redirect } />
        <Route path="/login" component={ Teste } />
      </Switch>
    );
  }
}
