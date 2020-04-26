const express = require('express')
const router = express.Router()
const tourController = require('../controllers/tourController')

router.route('/').get(tourController.getAllTours).post(tourController.createTour)
router.get('/:id', tourController.getTourById)

module.exports = router;