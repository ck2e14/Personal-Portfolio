import React, { Component } from 'react';
import './Splash.css';
import logo2 from '../../Assets/logo2.jpg';
// import logo1 from '../../Assets/logo1.png';
import Navbar from '../Navbar/Navbar';

class Splash extends Component {
   render() {
      return (
         <div>
            <div className="background">
               <img src={logo2} alt="logo-main" className="logo-main"/>
            </div>
            <div className="splash-blurb">
               <span>Full-Stack<br></br> Web Developer</span>
                  <div className="divider-line"></div>
                  <div className="divider-line-2"></div>
                  <div className="blurb-statement">
                     Passionate about designing and creating powerful, attractive web apps to solve real-life problems
                  </div>   

            </div>
         </div>
      )
   }
}

export default Splash
   