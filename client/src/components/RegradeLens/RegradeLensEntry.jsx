import React, {useState, useEffect} from 'react';
import axios from 'axios';

const chaos = 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png';
const div = 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png';

const RegradeLensEntry = ({lenObj, divine}) => {

  const conversion = () => {
    return (lenObj.receive.value/divine).toFixed(2)
  }

  return (
    <div className="flex justify-between">
      <label>
        {lenObj.currencyTypeName}:</label>
      <label>
        {lenObj.receive.value.toFixed(1)}
        <img src={chaos} className="max-w-5 max-h-5 inline"></img>
        OR {conversion()}
        <img src={div} className="max-w-5 max-h-5 inline"></img>
      </label>
    </div>
  )
}

export default RegradeLensEntry