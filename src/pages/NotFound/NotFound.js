import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

import Header from '../../components/Header/Header'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="NotFound">
        <h1 className="message error">404</h1>
        <p className="message warning">No hero ever wonders this area.</p>
        <Link to="/" className="message">
          <div>escape the void</div>
        </Link>
      </div>
    </>
  )
}

export default NotFound
