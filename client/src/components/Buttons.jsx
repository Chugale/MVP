import React, {useState, useEffect} from 'react';

const Buttons = () => {

  return (
    <div className="my-8">
      <button type="button"
        className="flex text-center text-black-1000 font-semibold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 text-lg px-5 py-1 hover:bg-gradient-to-br focus:border-4 focus:outline-none focus:border-blue-800 w-48">Regular Gems</button>
      <button type="button"
        className="flex text-center text-black-1000 font-semibold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 text-lg px-5 py-1 hover:bg-gradient-to-br focus:border-4 focus:outline-none focus:border-blue-800 w-48">Awakened Gems</button>
        <button type="button"
        className="flex text-center text-black-1000 font-semibold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 text-lg px-5 py-1 hover:bg-gradient-to-br focus:border-4 focus:outline-none focus:border-blue-800 w-48"> Essence</button>
        <button type="button"
        className="flex text-center text-black-1000 font-semibold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 text-lg px-5 py-1 hover:bg-gradient-to-br focus:border-4 focus:outline-none focus:border-blue-800 w-48">Sextants</button>
    </div>
  )


}

export default Buttons;