import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RegradeLens from './RegradeLens/RegradeLens.jsx';

const App = () => {



  return (
    <div>
      <div>
        <label>Lens Price</label>
        <RegradeLens />
      </div>
    </div>
  )
}

export default App;