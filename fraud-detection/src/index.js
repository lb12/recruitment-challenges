'use strict'

const { getNormalizedOrders } = require('./services/OrderService')
const { lookupFraudResults } = require('./services/FraudResultService')
const { readFile, getFileLines } = require('./utils/FileUtils')

const getFraudResults = filename => {
  if (!filename) {
    throw new Error('Filename was not provided')
  }

  const fileContent = readFile(filename)
  const lines = getFileLines(fileContent)

  const orders = getNormalizedOrders(lines)
  const fraudResults = lookupFraudResults(orders)

  return fraudResults
}

module.exports = { getFraudResults }
