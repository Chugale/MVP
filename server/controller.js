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
        console.log('this is response', response.data.lines)
        let currArr = response.data.lines;
        return currArr.filter((currObj) => currObj.currencyTypeName.includes('Lens') === true
        )
      })
      .then((result) => {
        res.status(200).send(result)
      })

  }
}
