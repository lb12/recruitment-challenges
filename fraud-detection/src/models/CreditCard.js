'use strict'

const ValidationUtils = require('../utils/ValidationUtils')

class CreditCard {
  constructor (number, expirationDate, cvv, type) {
    this.number = number
    this.expirationDate = expirationDate
    this.cvv = cvv
    this.type = type // visa, master card, american express...
  }

  isValid () {
    return ValidationUtils.isCreditCard(this)
  }

  toString () {
    return `
        CreditCard: {
                - type: ${this.type} card
                - number: ${this.number}
                - expirationDate: ${this.expirationDate}
                - cvv: ${this.cvv}
            }
        `
  }
}

module.exports = CreditCard
