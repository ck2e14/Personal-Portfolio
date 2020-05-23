import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component {
   render() {
      return (
         <div>
            <div className="background">
               <img src="https://i.imgur.com/8UCOcn8.png" alt="logo-icon" className="logo"/>
            </div>
            <div className="splash-blurb">
               <span>Full-Stack<br></br> Web Developer</span>
                  <div className="divider-line"></div>
                  <div className="divider-line-2"></div>
                  <div className="blurb-statement">
                     Passionate about designing and creating powerful, beautiful web apps to solve real-life problems  
                  </div>
            </div>
         </div>
      )
   }
}

export default Splash
