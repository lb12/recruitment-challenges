'use strict'

const Address = require('../models/Address')
const Order = require('../models/Order')
const CreditCard = require('../models/CreditCard')

function getNormalizedOrders (lines) {
  const orders = getOrdersFromLines(lines)
  normalizeOrders(orders)

  return orders
}

function getOrdersFromLines (lines) {
  const orders = []

  for (const [lineNumber, line] of lines.entries()) {
    let items = line.split(',')

    const address = new Address(items[3].toLowerCase(), items[4].toLowerCase(), items[5].toLowerCase(), items[6])
    const creditCard = new CreditCard(items[7])
    const order = new Order(Number(items[0]), Number(items[1]), items[2].toLowerCase(), address, creditCard)

    if (!order.isValid()) {
      console.error(`Founded a new type exception in line #${lineNumber}`)
      continue
    }

    orders.push(order)
  }

  return orders
}

function normalizeOrders (orders) {
  orders.map(order => order.normalizeOrder())
}

module.exports = {
  getNormalizedOrders
}
