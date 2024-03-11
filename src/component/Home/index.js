import './index.css'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'

const jwtToken = Cookies.get('jwt_token')

const Home = () => (
  <>
    <Navbar />
    <div className="homeContainer">
      <div className="homeDetails">
        <h1>Find The Job That Fits Your Life</h1>
        <p>Millions for people</p>
        <Link to="/jobs" className="linkStyle">
          <button className="loginBtn margin">Find Jobs</button>
        </Link>
      </div>
      <div className="imageContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
          className="image"
        />
      </div>
    </div>
  </>
)

export default Home
