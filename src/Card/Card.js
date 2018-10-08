import React from 'react'
import './Card.css'

const Card = props => {
  return (
    <div className="Card">
      <a href="/">
        <img className="CardThumbnail" src={props.thumbnail} alt={props.name} />
        <p className="CardTitle">{props.name}</p>
      </a>
      <button className="favorite">❤</button>
    </div>
  )
}

export default Card
