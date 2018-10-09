import React from 'react'
import PropTypes from 'prop-types'

import './Hero.css'

const Card = props => {
  return (
    <div className="Card">
      <a href={'/hero/' + props.id}>
        <img className="CardThumbnail" src={props.thumbnail} alt={props.name} />
        <p className="CardTitle">{props.name}</p>
      </a>
      <button className="favorite">❤</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  thumbnail: PropTypes.string,
  name: PropTypes.string
}

export default Card
