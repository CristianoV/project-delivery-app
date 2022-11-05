import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RedirectLogin from './Components/Redirect';
import Login from './Pages/Login';
import RegisterComponent from './Pages/Register';
import MyOrders from './Pages/MyOrders';
import Products from './Pages/Products';
import CustomerCheckout from './Pages/CustomerCheckout';
import MyContext from './context/store';
import OrderDetail from './Pages/OrderDetail';

function App() {
  const [saller, setSaller] = useState([]);

  const value = useMemo(() => {
    const spendInheritance = (x) => {
      const newSaller = saller.filter((item) => item.id === x.id);

      if (newSaller.length === 0 && x.quantity !== 0) return setSaller([...saller, x]);
      if (newSaller.length === 0 && x.quantity === 0) return setSaller([...saller]);
      newSaller[0].quantity = x.quantity;
      if (newSaller[0].quantity === 0) {
        return setSaller(saller.filter((item) => item.id !== x.id));
      }
      return setSaller([...saller]);
    };
    return { saller, spendInheritance };
  }, [saller]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <RedirectLogin /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <RegisterComponent /> } />
        <Route path="/customer/orders/:id" element={ <OrderDetail /> } />
        <Route path="/customer/orders" element={ <MyOrders /> } />

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
