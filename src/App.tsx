import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/LayotArea/Main/Main';
import Header from './Components/LayotArea/Header/Header';
import Login from './Components/LoginArea/Login/Login';

function App() {
  

  return (
    <div className="App">
     <Header/>
     <Main />
    </div>
  );
}

export default App;
