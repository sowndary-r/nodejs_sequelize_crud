const prodctrl = require('../controllers/prodctrl.js');
const router = require('express').Router()
const axios = require('axios').default;

router.post('/add',prodctrl.add)
router.get('/getall',prodctrl.getall)
router.get('/getone',prodctrl.getone)
router.post('/update',prodctrl.update)
router.post('/delete',prodctrl.deleteprod)
router.get('/ax',prodctrl.axi);

module.exports = router;