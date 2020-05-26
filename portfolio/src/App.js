import React from 'react';
import './App.css';
import Splash from './Components/Splash/Splash';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Resume from './Components/Resume/Resume';
import About from './Components/About/About';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
      
        <Navbar/>

        <div className="pages">
        
          <Route exact path='/'>
            <Splash/>
          </Route>
          
          <Route exact path='/about'>
            <About/>
          </Route>

          <Route path='/resume'>
              <Resume/> 
          </Route>
      
        </div>
        
      </div>
    
    </BrowserRouter>
  );
}

export default App;
