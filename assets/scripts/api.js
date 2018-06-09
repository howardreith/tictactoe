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

const updateMove = function (id, index, gameValue) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games' + id,
    index: index,
    gameValue: gameValue,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// function that returns to the server on wins
const onWin = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games' + id,
    data: data
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
  onWin: onWin
}
