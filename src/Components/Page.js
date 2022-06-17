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
        <h1>Collaborate. Track workflow. <br /> Manage the Team</h1>
        <p>Try workflo today and increase your companys productivity, effectiveness and attain great turn over with more happy clients</p>
        <button>Try it for free</button>
        <div className="figure">
          <span>
            <p>15000+</p>
            <p>Users</p>
          </span>

          <span>
            <p>400+</p>
            <p>Companies</p>
          </span>

          <span>
            <p>2 times</p>
            <p>Workspace of the year</p>
          </span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Page