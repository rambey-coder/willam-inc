import React from 'react'
import './NavFoot.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-section">
        <img src="./Assets/Workflo-logo.svg" alt="logo" className='page-logo' />

        <div className="lists">
            <Link to='#' className='link'>Products</Link>
            <Link to='#' className='link'>Pricing</Link>
            <Link to='#' className='link'>Blog</Link>
            <Link to='#' className='link'>Contact</Link>
            <Link to='#' className='link'>FAQs</Link>
            <Link to='#' className='link'>Terms & Conditions</Link>
            <Link to='#' className='link'>Privacy Policy</Link>
          </div>

          <hr />

          <div className="foot">
            <p>&#169; 2022 Workflo Org. All rights reserved</p>
            <span>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            </span>
          </div>
    </div>
  )
}

export default Footer