import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RegradeLensEntry from './RegradeLensEntry.jsx';

const RegradeLens = () => {
  const [currency, setCurrency] = useState('');
  const [lens, setLens] = useState([]);


  const getLens = () => {
    axios.get('/api/lens')
    .then((response) => {
      setLens(response.data)
    })
  }
  useEffect(() => {
    getLens()
  }, [])

  let filtered = lens
    .filter((currObj) => {
    return currObj.currencyTypeName.includes('Lens') === true
  })
    .map((lenObj, ind) => (<RegradeLensEntry lenObj={lenObj} key={ind}/>))

  return (
    <div>
      {
        filtered.length !== 0 ? filtered : <p>Loading...</p>
      }
    </div>
  )
}

export default RegradeLens;