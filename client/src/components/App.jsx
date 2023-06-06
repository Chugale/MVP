import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RegradeLens from './RegradeLens/RegradeLens.jsx';

const App = () => {
  const [divine, setDivine] = useState('');


  return (
    <div>
      <div>
        <label>Lens Price</label>
        <RegradeLens
          setDivine={setDivine}
          divine={divine}/>
      </div>
    </div>
  )
}

export default App;