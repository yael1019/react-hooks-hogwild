import React, { useState } from 'react'
import HogFacts from './HogFacts';

function HogsTile({ hog }) {
    
    const [info, setInfo] = useState(true);

    function handleClick() {
        setInfo(!info);
    }

  return (
    <div onClick={ handleClick }>
        <h1>{ hog.name }</h1>
        {/* <img src={ hog.image } alt="picture of pig"></img> */}
        {
            info 
            ?
            <img src={ hog.image } alt="picture of pig"></img>
            :
            <HogFacts hog={ hog } />
        }
    </div>
  )
}

export default HogsTile