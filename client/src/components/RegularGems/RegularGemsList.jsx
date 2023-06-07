import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RegularGemsListEntry from './RegularGemsListEntry.jsx'

const RegularGemsList = ({gems}) => {

  let value_div = gems
    .filter((gemObj) => (gemObj.divineValue >= 1) === true)
    .map((gemObj, ind) => <RegularGemsListEntry gemObj={gemObj} key={ind} />)



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>L/Q</th>
            <th>Price</th>
            <th>Superior</th>
            <th>Divergent</th>
            <th>Anomalous</th>
            <th>Phantasmal</th>
          </tr>
        </thead>
        <tbody>
        {
          value_div.length !== 0 ? value_div : null
        }
        </tbody>
      </table>
    </div>
  )

}

export default RegularGemsList;