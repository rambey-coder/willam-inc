import React from 'react'
import './NavFoot.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="nav-foot">
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
            </div>

            <hr />

            <div className="foot">
                <p>&#169; 2022 Workflo Org. All rights reserved</p>
                <span>
                    <a href="">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer