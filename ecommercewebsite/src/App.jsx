import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import Header from './Features/Header';
import Footer from './Features/Footer';
import Homepage from './screens/Homepage';
import Page404 from './screens/Page404';
import About from './screens/About/About';
import Products from './screens/Products/Products';
import Contact from './screens/Contact/Contact';
import Cart from './screens/Cart/Cart';
import Product from './screens/Products/Product';
import SingleProduct from './screens/Products/singleProduct';









function App() {
  const loading = false;



  return (
    loading ? <p>loading</p> : (

      <div className="App">

        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />


      </div>
    ))
}


export default App;
