'use strict'

const { normalizeEmail } = require('../utils/StringUtils')
const ValidationUtils = require('../utils/ValidationUtils')

class Order {
  constructor (orderId, dealId, email, address, creditCard) {
    this.orderId = orderId
    this.dealId = dealId
    this.email = email
    this.address = address
    this.creditCard = creditCard
  }

  normalizeOrder () {
    this.email = normalizeEmail(this.email)
    this.address.normalizeAddress()
  }

  isValid () {
    let isValid = true

    isValid = ValidationUtils.isInteger(this.orderId)

    if (isValid) {
      isValid = ValidationUtils.isInteger(this.dealId)
    }

    if (isValid) {
      isValid = ValidationUtils.isEmail(this.email)
    }

    if (isValid) {
      isValid = this.address.isValid()
    }

    if (isValid) {
      isValid = this.creditCard.isValid()
    }

    return isValid
  }

  toString () {
    return `
            Order {
                - orderId: ${this.orderId}
                - dealId: ${this.dealId}
                - email: ${this.email}
                - ${this.address.toString()}
                - ${this.creditCard.toString()}
            }
        `
  }
}

module.exports = Order
