'use strict'

const isInteger = number => {
  return Number.isInteger(number)
}

const isEmpty = text => {
  return (!text || text.length === 0)
}

const isEmail = email => {
  // Probably better replace this for a specialized library, this pattern was founded in https://www.w3resource.com/javascript/form/email-validation.php
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return !isEmpty(email) && email.match(mailFormat)
}

const isCreditCard = creditCard => {
  // Probably the best choice is to use a specialized library or dependency like https://www.npmjs.com/package/credit-card or develop a new one
  return true
}

module.exports = {
  isInteger,
  isEmpty,
  isEmail,
  isCreditCard
}
