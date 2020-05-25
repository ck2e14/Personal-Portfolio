import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
// import logo4 from '../../Assets/logo4.png';
import logo5 from '../../Assets/logo5.png';

const Navbar = () => {
   return (
      <div>
            <div className="navbar">
               <div className="navbar-items">
                  
                  <Link to='/about'>
                     <div className="nav-link">ABOUT</div>
                  </Link>

                  <Link to='/portfolio'>
                     <div className="nav-link">PORTFOLIO</div>
                  </Link>

                  <Link to='/resume'>
                     <div className="nav-link">RESUME</div>
                  </Link>

                  <Link to='/nav-link'>
                     <div className="nav-link">CONTACT</div>
                  </Link>

               </div>
            </div>
         <nav className="nav-divider-line"></nav>
         <a href='/'>
            <img src={logo5} alt="logo-icon-navbar" className="logo-icon-navbar"/>
         </a>
      </div>
   );
}

export default Navbar;
