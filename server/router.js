const router = require('express').Router();
const controller = require('./controller');

//api endpoints
router.get('/api/lens', controller.getLens);
// router.get('/api/lens', controller.getLens);
router.get('/api/gem_weight', controller.getGem_Weight);
//db endpoints
// router.get('/api/lens', controller.getLens);
// router.get('/api/lens', controller.getLens);


module.exports = router;