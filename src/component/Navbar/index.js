import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  logoutBtn = () => {
    Cookies.remove('jwt_token')
    const history = this.props
    history.push('/login')
  }

  render() {
    return (
      <div className="navbarDivContainer">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
            className="logo"
          />
        </Link>
        <ul className="navbarContainer">
          <li>
            <Link to="/" className="linkStyle">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="linkStyle">
              <p>Jobs</p>
            </Link>
          </li>
        </ul>
        <button className="loginBtn" onClick={this.logoutBtn}>
          Logout
        </button>
      </div>
    )
  }
}
export default Navbar
