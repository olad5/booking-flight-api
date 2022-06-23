class Middleware {
  mustBeInteger (req, res, next) {
    const id = req.params.id


    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } else {
        next()
    }

  }

 checkFlightFields(req, res, next) {
    const { title, time, price } = req.body

    if (title && time && price) {
        next()
    } else {
        res.status(400).json({ message: 'fields must not be empty' })
    }
}


}

const middleware  = new Middleware()

module.exports = {
  middleware
}
