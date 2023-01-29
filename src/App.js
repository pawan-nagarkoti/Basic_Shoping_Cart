import React from 'react';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import Cart from './Component/Cart';
import CartList from './Component/CartList';
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </>
  )
}

export default App