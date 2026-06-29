import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <p className='logo'>Tasky</p>
      <div className="sub-container">
            <Link to="/" className='nav-items'>Home</Link>
            <Link to="/about" className='nav-items'>About</Link>
            <Link to="/contact" className='nav-items'>Contact</Link>
            <Link to="/login" className='nav-items'>Login</Link>
      </div>
    </div>
  )
}

export default Navbar
