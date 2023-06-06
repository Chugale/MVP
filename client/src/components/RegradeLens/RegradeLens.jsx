import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RegradeLensEntry from './RegradeLensEntry.jsx';

const RegradeLens = ({setDivine, divine}) => {
  const [lens, setLens] = useState([]);

  const getLens = () => {
    axios.get('/api/lens')
    .then((response) => {
      response.data.forEach((obj) => {
        if(obj.currencyTypeName === 'Divine Orb') {
          setDivine(obj.receive.value)
        }
      })
      setLens(response.data)
    })
    .catch((err) => {
      console.log('APP REGRADE error', err)
    })
  }
  useEffect(() => {
    getLens()
  }, [])


  let filtered = lens.map((lenObj, ind) => (<RegradeLensEntry
    lenObj={lenObj}
    key={ind}
    setDivine={setDivine}
    divine={divine}/>))

  return (
    <div>
      {
        filtered.length !== 0 ? filtered : <p>Loading...</p>
      }
    </div>
  )
}

export default RegradeLens;