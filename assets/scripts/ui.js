'use strict'

const clickSuccess = function (clickResponse) {
  console.log('Click is', clickResponse)
}

const clickError = function (error) {
  console.log('Error is ', error)
}

module.exports = {
  clickSuccess: clickSuccess,
  clickError: clickError
}
