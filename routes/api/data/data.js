const router = require('express').Router()
const plants = require('./plants/plants')

router.use('/plants', plants)

module.exports = router;