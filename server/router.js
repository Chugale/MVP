const router = require('express').Router();
const controller = require('./controller');

//api endpoints
router.get('/api/lens', controller.getLens);
// router.get('/api/lens', controller.getLens);

//db endpoints
// router.get('/api/lens', controller.getLens);
// router.get('/api/lens', controller.getLens);


module.exports = router;