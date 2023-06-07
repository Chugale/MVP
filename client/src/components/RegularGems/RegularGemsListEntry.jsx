import React, {useState, useEffect} from 'react';
import axios from 'axios';

const div = 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png'


const RegularGemsListEntry = ({gemObj}) => {
  const [types, setTypes] = useState('')

  const baseName = () => {
    let fullName = gemObj.name.split(' ').slice(1).join(' ');
    console.log(fullName)
    axios.get('/db/regular_gems',{
      params: {
        name: fullName
      }
    })
    .then((response) => {
      console.log(`this is reacted response ${gemObj.name}`, response.data[0])
      if(response.data.length  >= 1){
        setTypes(response.data[0])
      } else {
        setTypes({superior: 0, anomalous: 0, divergent: 0, phantasmal: 0})
      }
    })
    .catch((error) => {
      console.log('this is react error', error)
    })
  }

  useEffect(() => {
    baseName()
  }, [gemObj])

  return (
    <tr>
      <td>{gemObj.name}</td>
      <td>{gemObj.gemLevel} / {gemObj.gemQuality}</td>
      <td>{gemObj.divineValue}
        <img src={div} className="max-w-5 max-h-5 inline"></img></td>
        <td>{types.superior}</td>
        <td>{types.divergent}</td>
        <td>{types.anomalous}</td>
        <td>{types.phantasmal}</td>
    </tr>
  )

};

export default RegularGemsListEntry;