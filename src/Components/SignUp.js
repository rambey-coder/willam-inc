import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="img-background">
        <div className="txt-container">
          <img src="./Assets/signup-star.svg" alt="star" />
          <h1>
            Collaborate <br />
            with ease. <span>Remotely</span>
          </h1>
          <img src="./Assets/vector-signup.svg" alt="vector" />
          <p>Join the team, make awesome projects that would make your clients happy.</p>
        </div>
      </div>

      <div className="form-container">
        <div className="form-section">
          <h1>Sign Up</h1>
          <p>Register with us today</p>
          <div className="form-content">
            <button>
              <img src="./Assets/slack-logo.svg" alt="slack" />
              Continue with Slack
            </button>
            <div className="line-content">
              <hr />
              <p>or</p>
              <hr />
            </div>
            <div className="forms">
              <form>
                <div className="form">
                  <span>
                    <label htmlFor="name">First Name</label>
                    <input type="text" />
                  </span>

                  <span>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" />
                  </span>
                </div>
                <div className="form">
                <span>
                    <label htmlFor="mail">Email</label>
                    <input type="email" />
                  </span>

                  <span>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                  </span>
                </div>
                <button>Sign up</button>
              </form>
            </div>
          </div>
          <p>Already have an account? <span><a href="#">Login</a></span></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp