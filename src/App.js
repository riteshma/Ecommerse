import React from 'react'
import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import Contact from './Components/Contact';
import About from './Components/About';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header  from './Components/Header';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Components/Checkout';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/products/:id' element={<ProductDetail/>}/>
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
    </>
  )
}

export default App