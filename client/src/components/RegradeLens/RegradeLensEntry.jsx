import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RegradeLensEntry = ({lenObj, divine}) => {

  const conversion = () => {
    return (lenObj.receive.value/divine).toFixed(2)
  }

  return (
    <div>
      <label>
        {lenObj.currencyTypeName}: {lenObj.receive.value.toFixed(1)} chaos OR {conversion()} div
      </label>
    </div>
  )
}

export default RegradeLensEntry