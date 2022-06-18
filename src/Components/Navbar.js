import React from 'react'
import './NavFoot.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)

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

            <div className="mobile-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </nav>
    )
}

export default Navbar