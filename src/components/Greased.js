import React from 'react'

function Greased({ greasedCb }) {
  return (
    <div>
        <button onClick={greasedCb} >Greased</button>
    </div>
  )
}

export default Greased