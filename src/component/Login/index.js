import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

class Login extends Component {
  state = {username: '', password: '', error: false, errorMsg: ''}

  getLoginPerson = async () => {
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log('response', response)
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      this.setState({error: false})
      const history = this.props
      history.replace('/')
    }
    if (response.status === 400) {
      console.log('error', data.error_msg)
      this.setState({error: response.ok, errorMsg: data.error_msg})
    }
  }

  submitBtn = event => {
    event.preventDefault()
    console.log('submit')
    this.getLoginPerson()
  }

  userName = e => {
    this.setState({username: e.target.value})
  }

  passWord = e => {
    this.setState({password: e.target.value})
  }

  loginBtn = () => {
    const {username, password} = this.state
    this.setState({username, password})
  }

  render() {
    // this.getLoginPerson()
    const jwtToken = Cookies.get('jwt_token')
    const {username, password, error, errorMsg} = this.state
    console.log(username, password, error)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginContainer">
        <form className="formContainer" onSubmit={this.submitBtn}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
            className="logo"
          />
          <label htmlFor="username">USERNAME</label>
          <input
            placeholder="Username"
            id="username"
            onChange={this.userName}
            value={username}
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            placeholder="Password"
            id="password"
            type="password"
            onChange={this.passWord}
            value={password}
          />
          <Link to="/">
            <button className="loginBtn">Login</button>
          </Link>

          {error && <p className="errorMsg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default Login
