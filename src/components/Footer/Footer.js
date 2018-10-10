import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

import Paginator from '../Paginator/Paginator'

const Footer = props => {
  return (
    <footer className="Footer">
      <div className="copyright">{props.copyright}</div>
      <Paginator />
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string
}

export default Footer
