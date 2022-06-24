import React from 'react'
import './Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
    return (
        <div className="price-container">
            <div className="nav-sec">
                <Navbar />
                <div className="hero-section">
                    <div className="price-content">
                        <div className='saly-container'>
                            <img src="./Assets/saly-contact.svg" alt="saly" className='saly saly-contact' />
                        </div>
                        <div className='pricing-sec'>
                            <h1>Contact Us</h1>
                            <p className='contact-parag'>Reach the team on any of this platform if you have any questions or would like to make an enquiry.</p>
                            <button className='try-btn'>Try it for free</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-form ">
                <div className="form1">
                    <h1>How can we help you?</h1>
                    <p>Drop your suggestions, questions or enquiry in the form and let us attend to them with our swift customer care service.</p>

                </div>
                <div className="form2">
                    <div className="forms">
                        <form>
                            <div className="form">
                                <span>
                                    <label htmlFor="name">First Name</label>
                                    <input type="text" />
                                </span>

                                <span>
                                    <label htmlFor="name">Company</label>
                                    <input type="text" />
                                </span>
                            </div>
                            <div className="form">
                                <span>
                                    <label htmlFor="mail">Email</label>
                                    <input type="email" />
                                </span>

                                <span>
                                    <label htmlFor="password">Phone Number</label>
                                    <input type="number" />
                                </span>
                            </div>
                            <div className="text-area">
                                <span>
                                    <label htmlFor="password">Whats your question?</label>
                                    <textarea></textarea>
                                </span>
                            </div>
                            <button className='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-contact">
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
                <span>
                <i className="fa-solid fa-location-dot"></i>
                <p>36, Company street, Victoria island, Lagos, Nigeria</p>
                </span>
                <span>
                <i className="fa-solid fa-headphones"></i>
                <p>+234 706 737 6819</p>
                </span>
            </div>
            <Footer />
        </div>
    )
}

export default Contact