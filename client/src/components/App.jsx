import React, {useState, useEffect, lazy, Suspense} from 'react';
import axios from 'axios';
const RegradeLens = React.lazy(() => import('./RegradeLens/RegradeLens.jsx'));
const RegularGemsList = React.lazy(() => import('./RegularGems/RegularGemsList.jsx'));
// import RegularGemsList from './RegularGems/RegularGemsList.jsx';
// import RegradeLens from './RegradeLens/RegradeLens.jsx';
import Buttons from './Buttons.jsx';
import Search from './Search.jsx';

import Help from './FallbackFunc.jsx';

const App = () => {

  const [gems, setGems] = useState([]);
  const [awakened, setAwakened] = useState([]);
  const [divine, setDivine] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const getGems = async () => {
    setIsLoading(true)

    try{
     const response = await axios.get('./api/gem_weight')
      const chunked = response.data.regular
      const combinedData = chunked.reduce((acc, chunk) => [...acc, ...chunk], [])
      setGems(combinedData)
      //THIS IS BEFORE CHUNKING ON SERVER SIDE
      // .then((response) => {
        // console.log('this is response', response.data.regular) //results in array of arrays, inner array of obj
        // setGems(response.data.regular)
        // setAwakened(response.data.awakened)
      // })
    }catch(err) {console.log('app side error', err  )}
      //THIS IS FOR PRE SERVER CHUNK
      // .catch(err => console.log('APP side error', err))
    setIsLoading(false)
  }

  useEffect(() => {
    getGems()
  }, []);

  return (
    <div >
      <Suspense fallback={Help.waitTable()}>
        <div className="flex justify-center">
          <label className="text-black-700 mr-4 font-bold">Lens Price: </label>
            <RegradeLens
              setDivine={setDivine}
              divine={divine}/>
        </div>
      </Suspense>

        <div className="inline-flex">
          <Buttons />
      <Suspense fallback={Help.waitTable()}>
          <div className="transition-opacity duration-500 opacity-100">
            <Search gems={gems}
              searchInput={searchInput}
              setSearchInput={setSearchInput}/>
            <RegularGemsList gems={gems}
              searchInput={searchInput}/>
        {/* <AwakenedGemList awakened={awakened} /> */}
          </div>
      </Suspense>
        </div>
    </div>
  )
}

export default App;