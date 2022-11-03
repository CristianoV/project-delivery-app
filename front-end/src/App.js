import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RedirectLogin from './Components/Redirect';
import Login from './Components/Login';
import RegisterComponent from './Components/Register';
import Products from './Pages/Products';
import CustomerCheckout from './Pages/CustomerCheckout';
import MyContext from './context/store';

function App() {
  const [saller, setSaller] = useState([]);

  const spendInheritance = (x) => {
    const newSaller = saller.filter((item) => item.id === x.id);
    if (newSaller.length === 0) {
      return setSaller([...saller, x]);
    }
    newSaller[0].quantity = x.quantity;
    if (newSaller[0].quantity === 0) {
      return setSaller(saller.filter((item) => item.id !== x.id));
    }
    return setSaller([...saller]);
  };

  const value = useMemo(() => ({ saller, spendInheritance }), [saller]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <RedirectLogin /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <RegisterComponent /> } />

        <Route
          path="/customer/products"
          element={
            <MyContext.Provider value={ value }>
              <Products />
            </MyContext.Provider>
          }
        />
        <Route
          path="/customer/checkout"
          element={
            <MyContext.Provider value={ value }>
              <CustomerCheckout />
            </MyContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
