import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logoIcon3 from '../../Assets/logoIcon3.png';
// import logoIcon5 from '../../Assets/logoIcon5.png';


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
            <img src={logoIcon3} alt="logo-icon-navbar" className="logo-icon-navbar"/>
         </a>
      </div>
   );
}

export default Navbar;
