import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RegularGemsListEntry from './RegularGemsListEntry.jsx'
import InfiniteScroll from 'react-infinite-scroll-component'
const RegularGemsList = ({gems}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let value_div = gems
    .filter((gemObj) => (gemObj.divineValue >= 1) === true)
    .map((gemObj, ind) => <RegularGemsListEntry gemObj={gemObj} key={ind} />)

  // const handleScroll = () => {
  //   // stub of object instead of window
  //   // document.documentElement.offsetHeight
  //   if (window.innerHeight + document.documentElement.scrollTop >= 400 || isLoading) {
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [isLoading]);

  // max-height: 650px;
  // overflow-y: scroll;
  // margin-bottom: 40px;
  return (
    <div className="relative overflow-y-auto max-h-[32rem]">
      <table className="border-spacing-5 py-3 divide-y divide-gray-300 bg-gray-500t">
      {/* <table className="table-fixed"> */}
        <thead className="flex-box">
          <tr>
            <th scope="col" className="px-2 py-2">Name</th>
            <th scope="col" className="px-2 py-2">L/Q</th>
            <th scope="col" className="px-2 py-2">Price</th>
            <th scope="col" className="px-2 py-2">Superior</th>
            <th scope="col" className="px-2 py-2">Divergent</th>
            <th scope="col" className="px-2 py-2">Anomalous</th>
            <th scope="col" className="px-2 py-2">Phantasmal</th>
          </tr>
        </thead>
        <tbody className="flex-box">
        {/* <tbody className="flex-box flex-col overflow-y-scroll"> */}
        {
          value_div.length !== 0 ? value_div : null
        }
        </tbody>
        {/* <div>
        {isLoading && <p>Loading...</p>}
        {error && (
        <p>
          Error:
          {error.message}
        </p>
        )}
      </div> */}
      </table>
      {/* <div>
        {isLoading && <p>Loading...</p>}
        {error && (
        <p>
          Error:
          {error.message}
        </p>
        )}
      </div> */}

    </div>
  )

}

export default RegularGemsList;