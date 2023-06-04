import './App.css';
import React                            from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddLease                         from './components/AddLease';
import Nav                              from './components/Nav';
import Footer                           from './components/Footer';
import ShowLeases                       from './components/ShowLeases';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element = {<ShowLeases/>} />
          <Route path='/add' element = {<AddLease/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
