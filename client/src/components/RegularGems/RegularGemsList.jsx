import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RegularGemsListEntry from './RegularGemsListEntry.jsx'

const RegularGemsList = ({gems, searchInput}) => {


  let value_div = gems
    .filter((gemObj) => (gemObj.divineValue >= 1) === true)
    .filter((gemObj) => gemObj.name.toLowerCase().includes(searchInput.toLowerCase()))
    .map((gemObj, ind) => <RegularGemsListEntry gemObj={gemObj} key={ind} />)


  return (
    <div className="m-8 relative overflow-y-auto max-h-[32rem]">
      <table className="border-spacing-5 py-3 divide-y divide-gray-300 bg-gray-500">
        <thead className="flex-box">
          <tr>
            <th scope="col" className="px-2 py-2">Name</th>
            <th scope="col" className="px-2 py-2">L/Q</th>
            <th scope="col" className="px-2 py-2">Price</th>
            <th scope="col" className="px-2 py-2">Superior</th>
            <th scope="col" className="px-2 py-2">Divergent</th>
            <th scope="col" className="px-2 py-2">Anomalous</th>
            <th scope="col" className="px-2 py-2">Phantasmal</th>
          </tr>
        </thead>
        <tbody className="flex-box">
        {
          value_div.length !== 0 ? value_div : null
        }
        </tbody>
      </table>
    </div>
  )

}

export default RegularGemsList;