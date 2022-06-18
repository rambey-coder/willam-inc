import React from 'react'
import './Page.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Page = () => {
  return (
    <div className="page-container">
      <div className="nav-sec">
        <Navbar />
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
        <img src="./Assets/Dashboard.svg" alt="dashboard" className='dashboard-img' />
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

      <div className="task-container">
        <div className="task-section">
          <div className="features-img">
            <img src="./Assets/Dashboard.svg" alt="dashboard" className='dashboard-img' />
          </div>
          <div className="features-content">
            <h2>Task list</h2>
            <p>See your task list, get motivated by seeing your achievement and the ones left to be done. </p>
            <button className='try-btn'>Try it for free</button>
          </div>
        </div>
      </div>

      <div className="notes-container">
        <div className="features-container">
          <div className="features-img">
            <img src="./Assets/Dashboard.svg" alt="dashboard" className='dashboard-img' />
          </div>

          <div className="features-content">
            <h2>Make notes</h2>
            <p>Keep your ideas and iterations on sticky notes and and also publish note to be seen by your team members.</p>
            <button className='try-btn'>Try it for free</button>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div className="carousel-container"></div>

      <div className="brains-section">
        <h1>Meet the brains</h1>
        <div className="brain-img">
          <span>
            <img src="./Assets/adedotun.png" alt="adedotun" />
            <h5>AdeDotun</h5>
            <p>CEO and Co-founder</p>
          </span>

          <span>
            <img src="./Assets/sam-lesley.png" alt="Sam Lesley" />
            <h5>Sam Lesley</h5>
            <p>COO and Co-founder</p>
          </span>

          <span>
            <img src="./Assets/maria.png" alt="Maria Ferguson" />
            <h5>Maria Ferguson</h5>
            <p>Engineering Lead</p>
          </span>

          <span>
            <img src="./Assets/adedamola.png" alt="Adedamola" />
            <h5>Adedamola</h5>
            <p>UI/UX Designer</p>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page