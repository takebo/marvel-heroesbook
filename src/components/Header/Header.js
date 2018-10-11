import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../../logo.svg'

import Search from './Search/Search'

const Header = props => {
  return (
    <header className="Header">
      <Link to="/" className="brand">
        <img src={logo} alt="brand logo" />
      </Link>
      <div className="navigation">
        <Link to="/favorites" className="link-item">
          My Favorites
        </Link>
        <Search
          changed={props.changed}
          pressed={props.pressed}
          search={props.search}
        />
      </div>
    </header>
  )
}

export default Header
