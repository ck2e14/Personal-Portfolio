import React from 'react';
import './App.css';
import Splash from './Components/Splash/Splash';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/'>
          <Splash/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
