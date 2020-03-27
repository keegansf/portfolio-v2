import React from "react"
import logo from "../../images/Logo.svg"
import "./header-styles.scss"

const Header = () => (
  <>
    <header className="nav-wrapper">
      <nav className="nav">
        <img className="logo" src={logo} alt="logo" />
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Blog</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  </>
)

export default Header
