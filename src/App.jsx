
import './App.css'
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import  About   from './components/About/About';
import Header from './components/Header/Header'
import  Contact  from "./components/Contact/Contact";
import { Footer } from './components/Footer/Footer';
import Compras from "./components/Compras/Compras";



function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/About' Component={About}></Route>
        <Route path='/Contact' Component={Contact}></Route>
        <Route path='/Compras' Component={ Compras }></Route>

      </Routes>
      <Footer />
    </>
  )
}
export default App