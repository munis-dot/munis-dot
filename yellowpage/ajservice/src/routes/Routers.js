import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/fav";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/shop";
import Postad from "../pages/postad";
import Imageupload from "../pages/imageupload"
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search/:key" element={<Search />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/fav" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/postad" element={<Postad />}/>
      <Route path="/postad/imageupload" element={<Imageupload />}/>
    </Routes>
  );
};

export default Routers;
