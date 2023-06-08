const axios = require('axios');

//edit league as needed

const poeNinjaApi_Gems = `https://poe.ninja/api/data/itemoverview?league=Crucible&type=SkillGem`;

const poeNinjaApi_Currency = 'https://poe.ninja/api/data/currencyoverview?league=Crucible&type=Currency'

module.exports = {
  getLens: (req, res) => {
    const options = {
      method: 'GET',
      url: poeNinjaApi_Currency
    }
    return axios(options)
      .then((response) => {
        let currArr = response.data.lines;
        return currArr.filter((currObj) => currObj.currencyTypeName.includes('Lens') === true || currObj.currencyTypeName.includes('Divine Orb') === true
        )
      })
      .then((result) => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log('CONTROLLER Lens error', err)
        res.sendStatus(500)
      })
  },
  getGem_Weight: (req, res) => {
    const options = {
      method: 'GET',
      url: poeNinjaApi_Gems
    }
    return axios(options)
      .then((response) => {
        let gemArr = response.data.lines;
        let result = {}
        let fullList = gemArr.filter((gemObj) => gemObj.gemLevel >= 20 && gemObj.count >= 5);

        // result.awakened = gemArr.filter((gemObj) => gemObj.name.includes('Awakened') === true);
        // console.log('API resuits', result.regular.slice(0, 10))

        // console.log('api results', fullList)
        //BELOW IS FOR TESTING
        // result.regular = fullList.slice(0, 10)
        result.regular = fullList
        return result
      })
      .then((result) => {
        // console.log('controller result', result)
        res.status(200).send(result)
      })
      .catch(err => {
        console.log('CONTROLLER Gem_weight error', err)
        res.sendStatus(500)
      })
  }
}
