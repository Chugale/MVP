import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RegradeLensEntry = ({lenObj}) => {

  return (
    <div>
      <label>
        {lenObj.currencyTypeName}: {lenObj.receive.value.toFixed(1)} chaos
      </label>
    </div>
  )

}

export default RegradeLensEntry