import React from 'react'
import HogsTile from './HogsTile';

function HogsContainer({ hogs, greased, sortPigs }) {

    // const sortedName = hogs.sort((a, b) => a.name > b.name ? 1 : -1);
    // const sortedWeight = hogs.sort((a, b) => a.weight < b.weight ? 1 : -1);

    // console.log(sortedName);

    // let sortedArr;
    // if(sortPigs === 'name') sortedArr = sortedName;
    // else if(sortPigs === 'weight') sortedArr = sortedWeight;

    // const finalSort = sortedArr.map(hog => <HogsTile key={ hog.weight } hog={ hog } />)

    const filtered = !greased ? hogs : hogs.filter(hog => hog.greased);

    const hogRender = filtered.map(hog => <HogsTile key={ hog.weight } hog={ hog } />);

  return (
    <div>
        {hogRender}
    </div>
  )
}

export default HogsContainer