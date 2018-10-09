import React from 'react'
import PropTypes from 'prop-types'

import './Heroes.css'

import Hero from './Hero/Hero'

const List = props => (
  <div className="List">
    {props.data.map(hero => {
      return (
        <Hero
          key={hero.id}
          id={hero.id}
          name={hero.name}
          thumbnail={
            hero.thumbnail.path +
            '/portrait_uncanny.' +
            hero.thumbnail.extension
          }
        />
      )
    })}
  </div>
)

List.propTypes = {
  data: PropTypes.array
}

export default List
