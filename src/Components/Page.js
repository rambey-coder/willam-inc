import React from 'react'
import './Page.css'
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div className="page-container">
    <div className="nav-sec">
      <nav className="nav">
        <img src="./Assets/Workflo-logo.svg" alt="logo" className='page-logo'/>

        <div className="lists">
          <Link to='#' className='link'>Products</Link>
          <Link to='#' className='link'>Pricing</Link>
          <Link to='#' className='link'>Blog</Link>
          <Link to='#' className='link'>Contact</Link>
          <Link to='#' className='link'>FAQs</Link>
          <span>
            <Link to='#' className='sign-in'>Sign In</Link>
          </span>
        </div>
      </nav>

      <div className="hero-section">
        <h1>Collaborate. Track workflow. Manage the Team</h1>
      </div>
      </div>
    </div>
  )
}

export default Page