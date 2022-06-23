const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');
const middlewares = require('../middlewares/middleware');

router.route('/').get(controller.flightController.getAllFlights)
router.route('/flights').get(controller.flightController.getAllFlights)
router.route('/flight/:id')
.get(middlewares.middleware.mustBeInteger , controller.flightController.getSingleFlight)
.patch(middlewares.middleware.mustBeInteger , middlewares.middleware.checkFlightFields, controller.flightController.updateFlight)
.delete(middlewares.middleware.mustBeInteger ,  controller.flightController.deleteSingleFlight)
router.route('/bookflight').post( middlewares.middleware.checkFlightFields, controller.flightController.bookFlight)

module.exports = router;

