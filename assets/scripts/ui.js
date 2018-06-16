'use strict'
const store = require('./store')
const api = require('./api.js')

// const clickSuccess = function (clickResponse) {
//   console.log('Click is', clickResponse)
// }
//
// const clickError = function (error) {
//   console.log('Error is ', error)
// }

const signUpSuccess = function (signUpResponse) {
  // console.log('signUpResponse is ' + signUpResponse)
  $('#sign-in-form').show()
  $('#get-sign-up').show()
  $('#sign-up-form').hide()
  $('.signup-success').show()
  $('.signup-success').text('Thank you ' + signUpResponse.user.email + '. Please sign in.')
  $('#sign-up-back').hide()
  document.getElementById('sign-up-form').reset()
}

const signUpError = function (error) {
  // console.log('Error is ' + error)
  if (error.responseText === '{"email":["has already been taken"]}') {
    $('.email-taken').show()
  } else {
    $('.passwords-match').show()
  }
  document.getElementById('sign-up-form').reset()
}

const signInSuccess = function (signInResponse) {
  // console.log('signInResponse is', signInResponse)
  store.user = signInResponse.user
  $('#get-change-password').show()
  $('#sign-in-form').hide()
  $('#get-sign-up').hide()
  $('#sign-out').show()
  $('.signup-success').hide()
  $('#user-email').text('Email: ' + store.user.email)
  $('#newGame').show()
  $('.please-sign-in').hide()
  document.getElementById('sign-in-form').reset()

  api.createGame()
    .then(createGameSuccess)
    .catch(createGameFail)
}

const signInError = function () {
  // console.log('Error is ', error)
  $('.invalid-credentials').show()
  $('.signup-success').hide()
  document.getElementById('sign-in-form').reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  // console.log('changePasswordResponse is', changePasswordResponse)
  $('#change-password-form').hide()
  $('#sign-out').show()
  $('#get-change-password').show()
  $('.change-confirmation').show()
  document.getElementById('change-password-form').reset()
  $('#change-password-back').hide()
  $('.invalid-change-password').hide()
  $('.change-confirmation').delay(4000).fadeOut('fast')
}

const changePasswordError = function (error) {
  console.log('Error is ' + error)
  document.getElementById('change-password-form').reset()
  $('.invalid-change-password').show()
}

const signOutSuccess = function (signOutResponse) {
  // console.log('signOutResponse is', signOutResponse)
  $('#sign-in-form').show()
  $('#get-sign-up').show()
  $('#sign-out').hide()
  $('.invalid-credentials').hide()
  $('#get-change-password').hide()
  $('.change-confirmation').hide()
  $('.play-area').hide()
  $('.scoreboard').hide()
  $('#reset-score').hide()
  $('.user-stats').hide()
  $('#get-user-stats').hide()
  $('#newGame').hide()
  $('.please-sign-in').show()
  document.getElementById('sign-out-form').reset()
}

const signOutError = function () {
  // console.log('Error is ', error)
  document.getElementById('sign-out-form').reset()
}

const createGameSuccess = function (createGameResponse) {
  // console.log('createGameResponse is', createGameResponse)
  store.id = createGameResponse.game.id
  // console.log('store.id is' + store.id)
  $('.play-area').show()
  $('.scoreboard').show()
  $('#reset-score').show()
  $('.user-stats').show()
  $('#get-user-stats').show()
  $('.the-title').text('Tic Tac Toe')
  $('.turn-notifier').show()
  $('.turn-notifier').text("Player X's turn")
}

const createGameFail = function () {
  // console.log('Error is ', error)
}

const getGameDataSuccess = function (getGameDataResponse) {
  // console.log('getGameDataResonse is', getGameDataResponse)
}

// re-add error as a parameter if necessary
const getGameDataFail = function () {
  // console.log('Error is ', error)
}

const getThisGameDataSuccess = function (getThisGameDataSuccess) {
  // console.log('getThisGameDataSuccess is', getThisGameDataSuccess)
}

const getThisGameDataFail = function () {
  // console.log('Error is ', error)
}

const getUserGameDataSuccess = function (getUserGameDataSuccess) {
  // console.log('getUserGameDataSuccess is', getUserGameDataSuccess)
  store.userData = getUserGameDataSuccess
  $('#games-played').text('Games played: ' + store.userData.games.length)
  let finishedGames = 0
  for (let i = 0; i < store.userData.games.length; i++) {
    let playerXScore = 0
    let playerOScore = 0
    if (store.userData.games[i].over === true) {
      finishedGames++
    }
    $('#games-completed').text('Games completed: ' + finishedGames)
    for (let i = 0; i < store.userData.games.length; i++) {
      // console.log(store.userData.games[i].cells)
      if (store.userData.games[i].cells[0] === 'x' && store.userData.games[i].cells[1] === 'x' && store.userData.games[i].cells[2] === 'x') {
        playerXScore = playerXScore + 1
      } else if (store.userData.games[i].cells[3] === 'x' && store.userData.games[i].cells[4] === 'x' && store.userData.games[i].cells[5] === 'x') {
        playerXScore = playerXScore + 1
      } else if (store.userData.games[i].cells[6] === 'x' && store.userData.games[i].cells[7] === 'x' && store.userData.games[i].cells[8] === 'x') {
        playerXScore++
      } else if (store.userData.games[i].cells[0] === 'x' && store.userData.games[i].cells[3] === 'x' && store.userData.games[i].cells[6] === 'x') {
        playerXScore++
      } else if (store.userData.games[i].cells[1] === 'x' && store.userData.games[i].cells[4] === 'x' && store.userData.games[i].cells[7] === 'x') {
        playerXScore++
      } else if (store.userData.games[i].cells[2] === 'x' && store.userData.games[i].cells[5] === 'x' && store.userData.games[i].cells[8] === 'x') {
        playerXScore++
      } else if (store.userData.games[i].cells[0] === 'x' && store.userData.games[i].cells[4] === 'x' && store.userData.games[i].cells[8] === 'x') {
        playerXScore++
      } else if (store.userData.games[i].cells[2] === 'x' && store.userData.games[i].cells[4] === 'x' && store.userData.games[i].cells[6] === 'x') {
        playerXScore++
      } else if (store.userData.games[i].cells[0] === 'o' && store.userData.games[i].cells[1] === 'o' && store.userData.games[i].cells[2] === 'o') {
        playerOScore++
      } else if (store.userData.games[i].cells[3] === 'o' && store.userData.games[i].cells[4] === 'o' && store.userData.games[i].cells[5] === 'o') {
        playerOScore++
      } else if (store.userData.games[i].cells[6] === 'o' && store.userData.games[i].cells[7] === 'o' && store.userData.games[i].cells[8] === 'o') {
        playerOScore++
      } else if (store.userData.games[i].cells[0] === 'o' && store.userData.games[i].cells[3] === 'o' && store.userData.games[i].cells[6] === 'o') {
        playerOScore++
      } else if (store.userData.games[i].cells[1] === 'o' && store.userData.games[i].cells[4] === 'o' && store.userData.games[i].cells[7] === 'o') {
        playerOScore++
      } else if (store.userData.games[i].cells[2] === 'o' && store.userData.games[i].cells[5] === 'o' && store.userData.games[i].cells[8] === 'o') {
        playerOScore++
      } else if (store.userData.games[i].cells[0] === 'o' && store.userData.games[i].cells[4] === 'o' && store.userData.games[i].cells[8] === 'o') {
        playerOScore++
      } else if (store.userData.games[i].cells[2] === 'o' && store.userData.games[i].cells[4] === 'o' && store.userData.games[i].cells[6] === 'o') {
        playerOScore++
      }
    }
    $('#XWins').text('Player X Wins: ' + playerXScore)
    $('#OWins').text('Player O Wins: ' + playerOScore)
  }
}

const getUserGameDataFail = function () {
  // console.log('Error is ', error)
}

const updateMoveSuccess = function (updateMoveResponse) {
  // console.log('updateMoveResonse is', updateMoveResponse)
}

const updateMoveFail = function () {
  // console.log('Error is ', error)
}

module.exports = {
  // clickSuccess: clickSuccess,
  // clickError: clickError,
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
  updateMoveFail: updateMoveFail,
  getUserGameDataSuccess: getUserGameDataSuccess,
  getUserGameDataFail: getUserGameDataFail
}
