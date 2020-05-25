import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


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
      </div>
   );
}

export default Navbar;
