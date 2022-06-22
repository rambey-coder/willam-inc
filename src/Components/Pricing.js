import React from 'react'
import './Pricing.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Pricing = () => {
    return (
        <div className="price-container">
            <div className="nav-sec">
                <Navbar />
                <div className="hero-section">
                    <div className="price-content">
                        <div className='saly-container'>
                            <img src="./Assets/saly-pricing.png" alt="saly" className='saly' />
                        </div>
                        <div className='pricing-sec'>
                            <h1>Pricing</h1>
                            <p>Find the best pricing that works for you and your team</p>
                            <button className='try-btn'>Try it for free</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="flex-one">
                    <div className='flex-container'>
                        <h4>Free Plan</h4>
                        <h3>$0<span>/month</span></h3>
                        <ul className='gen-list'>
                            <span>
                                <img src="./Assets/check-box.svg" alt="check-box" />
                                <li>Maximum of 2 members</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box.svg" alt="check-box" />
                                <li>Maximum of 5 projects</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box.svg" alt="check-box" />
                                <li>Leave note for your team member</li>
                            </span>
                        </ul>

                        <a href="#">See more feature</a>

                        <button className='try-btn cont'>Try it for free</button>
                    </div>
                </div>

                <div className="flex-two">
                    <div className='flex-container-middle'>
                        <h4>Orgnaization</h4>
                        <p>More than 40 members</p>
                        <h3>$2,000<span>/year</span></h3>

                        <ul className='gen-list middle'>
                            <span>
                                <img src="./Assets/check-box-middle.svg" alt="check-box" />
                                <li>40 members and above</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box-middle.svg" alt="check-box" />
                                <li>No membership restriction</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box-middle.svg" alt="check-box" />
                                <li>Track your team performance index</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box-middle.svg" alt="check-box" />
                                <li>Create unlimited schedules</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box-middle.svg" alt="check-box" />
                                <li>Access team calls</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box-middle.svg" alt="check-box" />
                                <li>Be the first to test our Betas and updates</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box-middle.svg" alt="check-box" />
                                <li>Leave notes for other team members</li>
                            </span>
                        </ul>

                        <a href="#">See more feature</a>

                        <button className='try-btn cont'>Try it for free</button>
                    </div>
                </div>

                <div className="flex-three">
                    <div className='flex-container-right'>
                        <h4>Team plan</h4>
                        <p>Less than 40 members</p>
                        <h3>$50<span>/year</span></h3>

                        <ul className='gen-list'>
                            <span>
                                <img src="./Assets/check-box.svg" alt="check-box" />
                                <li>Maximum of 40 members</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box.svg" alt="check-box" />
                                <li>Create unlimited schedules</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box.svg" alt="check-box" />
                                <li>Access team calls</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box.svg" alt="check-box" />
                                <li>Track your team performance index</li>
                            </span>
                            <span>
                                <img src="./Assets/check-box.svg" alt="check-box" />
                                <li>Leave notes for other team members</li>
                            </span>
                        </ul>

                        <a href="#">See more feature</a>

                        <button className='try-btn cont'>Try it for free</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pricing