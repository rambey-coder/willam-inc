import React from 'react'
import './Page.css'
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div className="page-container">
      <div className="nav-sec">
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

        <div className="hero-section">
          <h1>Collaborate. Track workflow. <br /> Manage the Team</h1>
          <p>Try workflo today and increase your companys productivity, effectiveness and attain great turn over with more happy clients</p>
          <button className='try-btn'>Try it for free</button>
          <div className="figure">
            <span>
              <p>15,000+</p>
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

      <div className="dashboard">
          <img src="./Assets/Dashboard.svg" alt="dashboard" className='dashboard-img'/>
        </div>

      <div className="main-section">
        <div className="brand-section">
          <h3>Worlds Top brands trust us with their projects</h3>
          <div className="img-container">
            <img src="./Assets/google-logo.svg" alt="google" />
            <img src="./Assets/flutterwave-logo.svg" alt="flutterwave" />
            <img src="./Assets/meta-logo.svg" alt="meta" />
            <img src="./Assets/paystack-logo.svg" alt="paystack" />
            <img src="./Assets/Dangote-logo.svg" alt="Dangote" />
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <p>Check out the numerous things that makes us special</p>
        <div className="features-container">
        <div className="features-img">
          <img src="./Assets/Dashboard.svg" alt="dashboard" className='dashboard-img' />
        </div>

          <div className="features-content">
             <h2>Dashboard</h2>  
             <p>Our amazing dashboard gives you an overview of your days task and upcoming task to be done and also organize your project according to priority.</p> 
             <button className='try-btn'>Try it for free</button>                                  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page