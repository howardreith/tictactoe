'use strict'
const store = require('./store')

const clickSuccess = function (clickResponse) {
  console.log('Click is', clickResponse)
}

const clickError = function (error) {
  console.log('Error is ', error)
}

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is', signUpResponse)
}

const signUpError = function (error) {
  console.log('Error is ', error)
}

const signInSuccess = function (signInResponse) {
  console.log('signInResponse is', signInResponse)
  store.user = signInResponse.user
  $('#content').html('')
  const userHtml = (`
    <h4>Welcome ${signInResponse.user.email}</h4>`)
  $('#content').append(userHtml)
}

const signInError = function (error) {
  console.log('Error is ', error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  console.log('changePasswordResponse is', changePasswordResponse)
}

const changePasswordError = function (error) {
  console.log('Error is ', error)
}

const signOutSuccess = function (signOutResponse) {
  console.log('signOutResponse is', signOutResponse)
  $('#content').html('')
  const userHtml = (`
    <h4>Goodbye</h4>`)
  $('#content').append(userHtml)
}

const signOutError = function (error) {
  console.log('Error is ', error)
}

const createGameSuccess = function (createGameResponse) {
  console.log('createGameResponse is', createGameResponse)
  store.id = createGameResponse.game.id
  console.log('store.id is' + store.id)
}

const createGameFail = function (error) {
  console.log('Error is ', error)
}

const getGameDataSuccess = function (getGameDataResponse) {
  console.log('getGameDataResonse is', getGameDataResponse)
}

const getGameDataFail = function (error) {
  console.log('Error is ', error)
}

const getThisGameDataSuccess = function (getThisGameDataSuccess) {
  console.log('getThisGameDataSuccess is', getThisGameDataSuccess)
}

const getThisGameDataFail = function (error) {
  console.log('Error is ', error)
}

const updateMoveSuccess = function (updateMoveResponse) {
  console.log('updateMoveResonse is', updateMoveResponse)
}

const updateMoveFail = function (error) {
  console.log('Error is ', error)
}

module.exports = {
  clickSuccess: clickSuccess,
  clickError: clickError,
  signUpError: signUpError,
  signUpSuccess: signUpSuccess,
  signInSuccess: signInSuccess,
  signInError: signInError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  signOutSuccess: signOutSuccess,
  signOutError: signOutError,
  createGameSuccess: createGameSuccess,
  createGameFail: createGameFail,
  getGameDataSuccess: getGameDataSuccess,
  getGameDataFail: getGameDataFail,
  getThisGameDataSuccess: getThisGameDataSuccess,
  getThisGameDataFail: getThisGameDataFail,
  updateMoveSuccess: updateMoveSuccess,
  updateMoveFail: updateMoveFail
}
