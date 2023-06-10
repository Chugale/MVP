import React from 'react';
import axios from 'axios';

const Help = {
  waitTable: () => {
    return (
      <div className="transition-opacity duration-500 opacity-0">
          <p>Loading...</p>
        </div>
    )
  }

}

export default Help