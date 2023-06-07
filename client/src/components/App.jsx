import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RegradeLens from './RegradeLens/RegradeLens.jsx';
import RegularGemsList from './RegularGems/RegularGemsList.jsx';

const App = () => {
  const [gems, setGems] = useState([]);
  const [awakened, setAwakened] = useState([])
  const [divine, setDivine] = useState('');

  const getGems = () => {
    // try {
    //   const response = await axios.get('./api/gem_weight');
    //   const res = response.data;
    //   setGems(prevData => [...prevData, ...res])
    // } catch(err) {
    //   console.log('APP SIDE ERROR', err)
    // }
    axios.get('./api/gem_weight')
      .then((response) => {
        setGems(response.data.regular)
        setAwakened(response.data.awakened)
      })
      .catch(err => console.log('APP side error', err))
  }

  useEffect(() => {
    getGems()
  }, []);

  return (
    <div className="h-screen bg-gray-400">
      <div>
        <label className="text-blue-700">Lens Price</label>
        <RegradeLens
          setDivine={setDivine}
          divine={divine}/>
      </div>
      <div>
        <button type="button"
          className="text-black-1000 font-semibold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 text-lg px-5 py-1 hover:bg-gradient-to-br focus:border-4 focus:outline-none focus:border-blue-800">Regular Gems</button>
        <RegularGemsList gems={gems}/>
        {/* <AwakenedGemList awakened={awakened} /> */}
      </div>
    </div>
  )
}

export default App;