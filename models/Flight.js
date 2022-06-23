
let flights = require('../data/flights.json')
const filename = './data/flights.json'
const helper = require('../helpers/helper.js')

function getFlights() {
    return new Promise((resolve, reject) => {
        if (flights.length === 0) {
            reject({
                message: 'no flights available',
                status: 202
            })
        }

        resolve(flights)
    })
}

function getFlight(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(flights, id)
        .then(flight => resolve(flight))
        .catch(err => reject(err))
    })
}

function addFlight(newFlight) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(flights) }
        const date = { 
            date: helper.newDate(),
        } 
        newFlight = { ...id, ...date, ...newFlight }
        flights.push(newFlight)
        helper.writeJSONFile(filename, flights)
        resolve(newFlight)
    })
}

function updateFlight(id, newFlight) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(flights, id)
        .then(flight => {
            const index = flights.findIndex(f => f.id == flight.id)
            id = { id: flight.id }
            const date = {
                date: helper.newDate(),
            } 
            flights[index] = { ...id, ...date, ...newFlight }
            helper.writeJSONFile(filename, flights)
            resolve(flights[index])
        })
        .catch(err => reject(err))
    })
}

function deleteFlight(id) {
    return new Promise((resolve, reject) => {

    console.log('original flights ', flights);
        helper.mustBeInArray(flights, id)
        .then(() => {
            flights = flights.filter(f => f.id != id)
    console.log('found new flights ', flights);
            helper.writeJSONFile(filename, flights)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    addFlight,
    getFlights,
    getFlight, 
    updateFlight,
    deleteFlight
}

