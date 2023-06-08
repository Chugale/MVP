import React, {useState, useEffect, lazy, Suspense} from 'react';
import axios from 'axios';
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const RegradeLens = React.lazy(() => import('./RegradeLens/RegradeLens.jsx'));
const RegularGemsList = React.lazy(() => import('./RegularGems/RegularGemsList.jsx'));
// import RegularGemsList from './RegularGems/RegularGemsList.jsx';
import Buttons from './Buttons.jsx';

const App = () => {

  const [gems, setGems] = useState([]);
  const [awakened, setAwakened] = useState([]);
  const [divine, setDivine] = useState('');
  // const []

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
    <div >
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className="flex justify-center">
          <label className="text-black-700 mr-4 font-bold">Lens Price: </label>
            <RegradeLens
              setDivine={setDivine}
              divine={divine}/>
        </div>
        <div className="inline-flex">
          <Buttons />
          <RegularGemsList gems={gems}/>
        {/* <AwakenedGemList awakened={awakened} /> */}
        </div>
      </Suspense>
    </div>
  )
}

export default App;