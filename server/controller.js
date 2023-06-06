const axios = require('axios');


//edit league as needed

const poeNinjaApi_Gems = `https://poe.ninja/api/data/itemoverview?league=Crucible&type=SkillGem`;

const poeNinjaApi_Currency = 'https://poe.ninja/api/data/currencyoverview?league=Crucible&type=Currency'

module.exports = {
  getLens: (req, res) => {
    const options = {
      method: 'GET',
      url: poeNinjaApi_Currency,
      params: {
        count: 2
      }
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
        result.regular = gemArr.filter((gemObj) => gemObj.gemLevel >= 20);
        result.awakened = gemArr.filter((gemObj) => gemObj.name.includes('Awakened') === true);
        return result
      })
      .then((result) => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log('CONTROLLER Gem_weight error', err)
        res.sendStatus(500)
      })
  }
}
