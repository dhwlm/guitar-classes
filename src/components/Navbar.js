import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../images/favicon.png'

class Navbar extends React.Component {
  render () {
    return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" height="45"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <NavLink to='/add' className="dropdown-item">
                  Add Student
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  }
}

export default Navbar;
