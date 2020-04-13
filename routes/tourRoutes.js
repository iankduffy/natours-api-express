const express = require('express')
const router = express.Router()
const tourController = require('../controllers/tourController')

router.param('id', tourController.checkID)

router.route('/').get(tourController.getAllTours).post(tourController.middlewareCreateNewTour, tourController.createTour)
router.get('/:id', tourController.getTourById)

module.exports = router;