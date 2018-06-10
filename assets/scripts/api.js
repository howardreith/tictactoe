'use strict'

const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    // make a request
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGameData = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getThisGameData = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + store.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMove = function (updateMoveObject) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.id,
    data: updateMoveObject,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  createGame: createGame,
  getGameData: getGameData,
  updateMove: updateMove,
  getThisGameData: getThisGameData
}
