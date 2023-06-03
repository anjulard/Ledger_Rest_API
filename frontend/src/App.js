import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddLease from './components/AddLease';
import Nav from './components/Nav';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element = {<h1>Leases</h1>} />
          <Route path='/add' element = {<AddLease/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
