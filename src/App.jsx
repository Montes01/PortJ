
import './App.css'
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import  About   from './components/About/About';
import Header from './components/Header/Header'
import  Contact  from "./components/Contact/Contact";


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/About' Component={About}></Route>
        <Route path='/Contact' Component={Contact}></Route>
      </Routes>
    </>
  )
}
export default App