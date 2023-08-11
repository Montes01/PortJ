import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header/header';
import {Section} from "../src/components/section/Section";

import { Product } from "../src/components/Product";


function App() {

  return (
    <>
      <Header/>
      <Section/>
    </>
  )
}
export default App
