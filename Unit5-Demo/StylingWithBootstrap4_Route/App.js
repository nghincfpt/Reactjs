import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from "./components/Home/home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ListItem from "./components/ListMenu/listitem.jsx";
import ListData from "./components/TableData/listdata.jsx";
import Error from "./components/Errors/404.jsx";
import './App.css';

function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-3'>
          <ListItem />
        </div>
        <div className='col-9'>
          <main>
            <Routes>
              <Route path="/" exact element={ <Home /> }  />
              <Route path="/contact" exact element={ <Contact /> } />
              <Route path="/listdata" exact element={ <ListData /> } />             
              <Route path = "*" element={ <Error /> } />
            </Routes>
          </main>
        </div>
      </div>
    </div>    
  );
}

export default App;
