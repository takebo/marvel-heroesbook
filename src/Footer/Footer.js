import React from 'react'
import './Footer.css'

const Footer = props => {
  return (
    <footer className="Footer">
      <div className="copyright">{props.copyright}</div>
      <div className="Pagination">
        <a href="/">prev</a>
        <a href="/">1</a>
        <a href="/">2</a>
        <a href="/">3</a>
        <a href="/">4</a>
        <a href="/">5</a>
        <a href="/">next</a>
      </div>
    </footer>
  )
}

export default Footer
