'use strict'

const FraudResult = require('../models/FraudResult')

function lookupFraudResults (orders) {
  let isFraudulent = false
  const fraudResults = []

  orders.forEach((current, i) => {
    for (let j = i + 1; j < orders.length; j++) {
      const possibleFraudulentOrder = orders[j]
      isFraudulent = isFraudulentOrder(current, possibleFraudulentOrder)
      isFraudulent && fraudResults.push(new FraudResult(true, possibleFraudulentOrder.orderId))
    }
  })

  return fraudResults
}

function isFraudulentOrder (current, possibleFraudulentOrder) {
  let isFraudulent = false

  if (current.dealId === possibleFraudulentOrder.dealId && current.creditCard !== possibleFraudulentOrder.creditCard) {
    const sameEmail = current.email === possibleFraudulentOrder.email
    const sameAddress = current.address.isEquals(possibleFraudulentOrder.address)
    isFraudulent = sameEmail || sameAddress
  }

  return isFraudulent
}

module.exports = {
  lookupFraudResults
}
