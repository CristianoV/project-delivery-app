import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RedirectLogin from './Components/Redirect';
import Login from './Components/Login';
import RegisterComponent from './Components/Register';
import Products from './Pages/Products';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <RedirectLogin /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <RegisterComponent /> } />
          <Route path="/customer/products" element={ <Products /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}
