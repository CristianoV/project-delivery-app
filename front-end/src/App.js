import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RedirectLogin from './Components/Redirect';
import Login from './Components/Login';
import RegisterComponent from './Components/Register';
import Products from './Pages/Products';
import MyContext from './context/store';

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

        <Route
          path="/customer/products"
          element={
            <MyContext.Provider value={ value }>
              <Products />
            </MyContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
