import React from 'react';
import './App.css';
import Splash from './Components/Splash/Splash';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Resume from './Components/Resume/Resume';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <div className="hide-bar"></div>
      
        <Navbar/>
        
        <Route exact path='/'>
          <Splash/>
        </Route>

        <Route path='/resume'>
            <Resume/> 
        </Route>
      
      </div>
    
    </BrowserRouter>
  );
}

export default App;
