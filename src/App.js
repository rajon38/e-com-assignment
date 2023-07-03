import React from "react";
import './App.css';
import Home from "./modules/Home/Home";
import {Route, Routes} from "react-router-dom";
import Product from "./modules/product/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./modules/Products/products";
import Cart from "./modules/Cart/Cart";
function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<div>404</div>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
