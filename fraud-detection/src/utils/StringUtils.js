'use strict'

const normalizeEmail = email => {
  const aux = email.split('@')

  aux[0] = aux[0].replace('.', '')
  const plusCharAtIndex = aux[0].indexOf('+')

  if (plusCharAtIndex >= 0) {
    aux[0] = aux[0].substring(0, plusCharAtIndex)
  }

  return aux.join('@')
}

const replaceAbbreviationToFullname = (stringToReplace, abbreviation, fullName) => {
  return stringToReplace.replace(abbreviation, fullName)
}

module.exports = {
  normalizeEmail,
  replaceAbbreviationToFullname
}
