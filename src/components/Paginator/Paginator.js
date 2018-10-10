import React from 'react'
import './Paginator.css'

const Paginator = props => {
  return (
    <div className="Paginator">
      <button name="prevPage">&lt;</button>
      <input name="currentPage" />
      <button name="nextPage">&gt;</button>
    </div>
  )
}

export default Paginator
