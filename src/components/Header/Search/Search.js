import React from 'react'
import './Search.css'

const Search = props => {
  return (
    <div className="Search">
      <input
        type="text"
        className="SearchInput"
        placeholder="Find your hero..."
        onChange={props.changed}
        value={props.keyword}
        onKeyPress={props.pressed}
      />
      <button className="SearchButton" />
    </div>
  )
}

export default Search
