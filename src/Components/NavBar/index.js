import React from 'react';
import {  Link } from 'react-router-dom';
import Search from "../../Components/Search"
import "./style.css";

const NavBar = () => {
    return (        
         <header>
         <h1 id="nav-title">GitHub</h1>
        <Search/>
         <nav>
             <ul>
             <Link  to="/" className='link'>Home</Link>
            <Link  to="/comparison"  className='link'>Comparison</Link>
             </ul>
         </nav>
     </header>
    );
}

export default NavBar;
