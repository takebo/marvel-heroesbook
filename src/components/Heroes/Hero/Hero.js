import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import './Hero.css'

const Card = props => {
  const hero = {
    id: props.id,
    name: props.name,
    thumbnail: props.thumbnail
  }
  return (
    <div className="Card">
      <Link to={'/hero/' + props.id}>
        <img className="CardThumbnail" src={props.thumbnail} alt={props.name} />
        <p className="CardTitle">{props.name}</p>
      </Link>
      <button
        className={`favorite ${props.fav}`}
        id={props.id}
        onClick={() => props.favorited(hero)}
      >
        ❤
      </button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  thumbnail: PropTypes.string,
  name: PropTypes.string
}

export default Card
