import React from 'react'
import './Header.css'
import logo from '../logo.svg'

const Header = props => {
  return (
    <header className="Header">
      <a href="/" className="brand">
        <img src={logo} alt="brand logo" />
      </a>
      <div className="Search">
        <input type="text" className="SearchInput" placeholder="Search..." />
        <button className="SearchButton">icon</button>
      </div>
    </header>
  )
}

export default Header
