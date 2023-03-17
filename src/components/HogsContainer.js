import React from 'react'
import HogsTile from './HogsTile';

function HogsContainer({ hogs, greased, sortPigs }) {

  //! sort is destructive!!!!!!!

  // let sortedHogs;

  // if(sortPigs === 'All') {
  //   sortedHogs = hogs;
  // } else if(sortPigs === 'name') {
  //   const sortedHogs = [...hogs].sort((a, b) => a.name > b.name ? 1 : -1);
  // } else if(sortPigs === 'weight') {
  //   const sortedHogs = [...hogs].sort((a, b) => a.weight > b.weight ? 1 : -1);
  // }


  // let sortedArr;
  // if(sortPigs === 'name') sortPigsByName();
  // else if(sortPigs === 'weight') sortPigsByWeight();

  // const finalSort = sortedArr.map(hog => <HogsTile key={ hog.weight } hog={ hog } />)

  // const filtered = !greased ? hogs : hogs.filter(hog => hog.greased);

  const filtered = hogs
    .sort((a, b) => {
      if (sortPigs === 'name') {
        return a.name > b.name;
      }
      else if (sortPigs === 'weight') {
        return a.weight > b.weight
      }
    })
    .filter(hog => !greased ? true : hog.greased)

  const hogRender = filtered.map(hog => <HogsTile key={hog.weight} hog={hog} />);

  return (
    <div>
      {hogRender}
    </div>
  )
}

export default HogsContainer