import React from 'react'

function Sort({ sortCb }) {
  return (
    <div>
        <select onChange={ sortCb }>
            <option value='All'>Sort Pigs:</option>
            <option value='name'>Name</option>
            <option value='weight'>Weight</option>
        </select>
    </div>
  )
}

export default Sort