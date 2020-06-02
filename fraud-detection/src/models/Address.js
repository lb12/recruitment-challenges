'use strict'

const { replaceAbbreviationToFullname } = require('../utils/StringUtils')
const ValidationUtils = require('../utils/ValidationUtils')

class Address {
  constructor (street, city, state, zipCode) {
    this.street = street
    this.city = city
    this.state = state
    this.zipCode = zipCode
  }

  normalizeAddress () {
    this.normalizeStreet()
    this.normalizeState()
  }

  normalizeStreet () {
    this.replaceStreet()
    this.replaceRoad()
  }

  replaceStreet () {
    this.street = replaceAbbreviationToFullname(this.street, 'st.', 'street')
  }

  replaceRoad () {
    this.street = replaceAbbreviationToFullname(this.street, 'rd.', 'road')
  }

  normalizeState () {
    this.replaceZipToStateName('il', 'illinois')
    this.replaceZipToStateName('ca', 'california')
    this.replaceZipToStateName('ny', 'new york')
  }

  replaceZipToStateName (zip, stateName) {
    this.state = replaceAbbreviationToFullname(this.state, zip, stateName)
  }

  isEquals (address) {
    const isSameState = this.state === address.state
    const isSameZipCode = this.zipCode === address.zipCode
    const isSameStreet = this.street === address.street
    const isSameCity = this.city === address.city

    return isSameStreet && isSameCity && isSameState && isSameZipCode
  }

  isValid () {
    let isValid = true

    isValid = !ValidationUtils.isEmpty(this.state)

    if (isValid) {
      isValid = !ValidationUtils.isEmpty(this.zipCode)
    }

    if (isValid) {
      isValid = !ValidationUtils.isEmpty(this.street)
    }

    if (isValid) {
      isValid = !ValidationUtils.isEmpty(this.city)
    }

    return isValid
  }

  toString () {
    return `
             Address: {
                - street: ${this.street}
                - city: ${this.city}
                - state: ${this.state}
                - zipCode: ${this.zipCode}
            }
        `
  }
}

module.exports = Address
