
const flightModel = require ( '../models/Flight')

class FlightController {
  async bookFlight(req, res) {
    try {
      const flight  = await  flightModel.addFlight(req.body)
      return res.status(200).json({
        message: "New flight added",
        flight: flight 
      })
    } catch (err ) {
        return res.status(500).json({ message: err.message })
    }
  }
  async getAllFlights(req, res) {
    try {
      const flights  = await  flightModel.getFlights()
      return res.status(200).json({
        flights: flights 
      })
    } catch (err ) {
        return res.status(500).json({ message: err.message })
    }
  }

  async getSingleFlight(req, res) {
    try {
      const flight  = await  flightModel.getFlight( req.params.id)
      return res.status(200).json({
        flight: flight 
      })
    } catch (err ) {
        return res.status(500).json({ message: err.message })
    }
  }

  async updateFlight(req, res) {
    try {
      const flightId  = req.params.id
      const flight  = await  flightModel.updateFlight(flightId, req.body)
      return res.status(200).json({
        flight: flight 
      })
    } catch (err ) {
        return res.status(500).json({ message: err.message })
    }
  }

  async deleteSingleFlight(req, res) {
    try {
      const flightId  = req.params.id

      await  flightModel.deleteFlight(flightId)
      return res.status(200).json({
        message: 'Item deleted'
      })
    } catch (err ) {
        return res.status(500).json({ message: err.message })
    }
  }

}



const flightController = new FlightController()

module.exports = {
  flightController
}
