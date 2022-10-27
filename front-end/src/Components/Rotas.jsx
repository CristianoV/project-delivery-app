import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Redirect from './Redirect';
import Teste from './Teste';

const Rotas = () => {
  <BrowserRouter>
    <Route exact path="/" component={ Redirect } />
    <Route path="/login" component={ <Teste /> } />
  </BrowserRouter>;
};

export default Rotas;
