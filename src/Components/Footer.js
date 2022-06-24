import React from 'react'
import './NavFoot.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="nav-foot">
                <img src="./Assets/Workflo-logo.svg" alt="logo" className='page-logo' />

                <div className="lists-footer">
                    <Link to='/page' className='link'>Products</Link>
                    <Link to='#' className='link'>Pricing</Link>
                    <Link to='#' className='link'>Blog</Link>
                    <Link to='/contact' className='link'>Contact</Link>
                    <Link to='#' className='link'>FAQs</Link>
                    <Link to='#' className='link'>Terms & Conditions</Link>
                    <Link to='#' className='link'>Privacy Policy</Link>
                </div>
            </div>

            <hr />

            <div className="foot">
                <p>&#169; 2022 Workflo Org. All rights reserved</p>
                <span>
                    <a href="https://www.linkedin.com/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer