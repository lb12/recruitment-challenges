// dotenv is required to enable custom enviroment variables like FILES_FOLDER
const dotenv = require('dotenv')
const FraudRadar = require('../index')
const assert = require('assert')

beforeEach(() => {
  dotenv.config()
})

describe('Fraud Radar', function () {
  it('Should process the one line file', function () {
    const result = FraudRadar.getFraudResults('OneLineFile.txt')
    assert.ok(result)
    assert.equal(result.length, 0)
  })

  it('Should process the two line file in which the second is fraudulent', function () {
    const result = FraudRadar.getFraudResults('TwoLines_FraudulentSecond.txt')
    assert.ok(result)
    assert.equal(result.length, 1)
    assert.equal(result[0].isFraudulent, true)
    assert.equal(result[0].orderId, 2)
  })

  it('Should process the three line file in which the second is fraudulent', function () {
    const result = FraudRadar.getFraudResults('ThreeLines_FraudulentSecond.txt')
    assert.ok(result)
    assert.equal(result.length, 1)
    assert.equal(result[0].isFraudulent, true)
    assert.equal(result[0].orderId, 2)
  })

  it('Should process the four line file in which more than one order is fraudulent', function () {
    const result = FraudRadar.getFraudResults('FourLines_MoreThanOneFraudulent.txt')
    assert.ok(result)
    assert.equal(result.length, 2)
  })
})
