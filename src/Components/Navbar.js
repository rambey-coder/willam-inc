import React from 'react'
import './NavFoot.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className="nav">
          <img src="./Assets/Workflo-logo.svg" alt="logo" className='page-logo' />

          <div className="lists">
            <Link to='#' className='link'>Products</Link>
            <Link to='#' className='link'>Pricing</Link>
            <Link to='#' className='link'>Blog</Link>
            <Link to='#' className='link'>Contact</Link>
            <Link to='#' className='link'>FAQs</Link>
            <span>
              <Link to='/' className='sign-in'>Sign Up</Link>
            </span>
          </div>
        </nav>
  )
}

export default Navbar