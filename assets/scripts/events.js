const getFormFields = require('../../lib/get-form-fields')
const authUi = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')

// Find a way to make a variable ++ based on the value of the html element
// we created above.
let round = 0
let gameOn = true
let winner = null
let player1Wins = 0
let player2Wins = 0
let draws = 0

// This sets the value on screen to x or o as appropriate.
// The round ++ tracks the round and alternates between o and x.

const boxes = [
  {
    name: 'box0',
    value: null
  },
  {
    name: 'box1',
    value: null
  },
  {
    name: 'box2',
    value: null
  },
  {
    name: 'box3',
    value: null
  },
  {
    name: 'box4',
    value: null
  },
  {
    name: 'box5',
    value: null
  },
  {
    name: 'box6',
    value: null
  },
  {
    name: 'box7',
    value: null
  },
  {
    name: 'box8',
    value: null
  }
]

const updateMoveObject = {
  'game': {
    'cell': {
      'index': '',
      'value': ''
    },
    'over': false
  }
}

console.log('updateMoveOject is ' + updateMoveObject)
console.log('updateMoveObjects game is ' + updateMoveObject.game)
console.log('updateMoveObjects cell is ' + updateMoveObject.game.cell)
console.log('updateMoveObjects index is ' + updateMoveObject.game.cell.index)
console.log('updateMoveObjects value is ' + updateMoveObject.game.cell.value)

const onClick = function (event) {
  event.preventDefault()
  round = round + 1 // round tracker
  console.log('Round ' + round)
  console.log('Player 1 Wins: ' + player1Wins)
  console.log('Player 2 Wins: ' + player2Wins)
  console.log('Draws: ' + draws)
  if (round % 2 === 1) {
    document.getElementById(this.id).innerHTML = 'x'
    const theNum = this.id.replace(/^\D+/g, '')
    boxes[theNum].value = 'x'
  } else if (round % 2 === 0) {
    document.getElementById(this.id).innerHTML = 'o'
    const theNum = this.id.replace(/^\D+/g, '')
    boxes[theNum].value = 'o'
  }
  if (boxes[0].value === 'x' && boxes[1].value === 'x' && boxes[2].value === 'x') {
    winner = 'Player 1'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    // Need to add function that notifies server of win.
    return player1Wins
  } else if (boxes[3].value === 'x' && boxes[4].value === 'x' && boxes[5].value === 'x') {
    winner = 'Player 1'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player1Wins
  } else if (boxes[6].value === 'x' && boxes[7].value === 'x' && boxes[8].value === 'x') {
    winner = 'Player 1'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player1Wins
  } else if (boxes[0].value === 'x' && boxes[3].value === 'x' && boxes[6].value === 'x') {
    winner = 'Player 1'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player1Wins
  } else if (boxes[1].value === 'x' && boxes[4].value === 'x' && boxes[7].value === 'x') {
    winner = 'Player 1'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player1Wins
  } else if (boxes[2].value === 'x' && boxes[5].value === 'x' && boxes[8].value === 'x') {
    winner = 'Player 1'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player1Wins
  } else if (boxes[0].value === 'x' && boxes[4].value === 'x' && boxes[8].value === 'x') {
    winner = 'Player 1'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player1Wins
  } else if (boxes[2].value === 'x' && boxes[4].value === 'x' && boxes[6].value === 'x') {
    winner = 'Player 1'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player1Wins
  } else if (boxes[0].value === 'o' && boxes[1].value === 'o' && boxes[2].value === 'o') {
    winner = 'Player 2'
    console.log('The winner is ' + winner)
    gameOn = false
    player1Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player2Wins
  } else if (boxes[3].value === 'o' && boxes[4].value === 'o' && boxes[5].value === 'o') {
    winner = 'Player 2'
    player2Wins++
    console.log('The winner is ' + winner)
    gameOn = false
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player2Wins
  } else if (boxes[6].value === 'o' && boxes[7].value === 'o' && boxes[8].value === 'o') {
    winner = 'Player 2'
    console.log('The winner is ' + winner)
    gameOn = false
    player2Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player2Wins
  } else if (boxes[0].value === 'o' && boxes[3].value === 'o' && boxes[6].value === 'o') {
    winner = 'Player 2'
    console.log('The winner is ' + winner)
    gameOn = false
    player2Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player2Wins
  } else if (boxes[1].value === 'o' && boxes[4].value === 'o' && boxes[7].value === 'o') {
    winner = 'Player 2'
    console.log('The winner is ' + winner)
    gameOn = false
    player2Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player2Wins
  } else if (boxes[2].value === 'o' && boxes[5].value === 'o' && boxes[8].value === 'o') {
    winner = 'Player 2'
    console.log('The winner is ' + winner)
    gameOn = false
    player2Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player2Wins
  } else if (boxes[0].value === 'o' && boxes[4].value === 'o' && boxes[8].value === 'o') {
    winner = 'Player 2'
    console.log('The winner is ' + winner)
    gameOn = false
    player2Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player2Wins
  } else if (boxes[2].value === 'o' && boxes[4].value === 'o' && boxes[6].value === 'o') {
    winner = 'Player 2'
    console.log('The winner is ' + winner)
    gameOn = false
    player2Wins++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return player2Wins
  } else if (round > 8) {
    winner = 'Draw'
    console.log('The game is a ' + winner)
    gameOn = false
    draws++
    if (gameOn !== true) {
      $('#box0').off('click', onClick)
      $('#box1').off('click', onClick)
      $('#box2').off('click', onClick)
      $('#box3').off('click', onClick)
      $('#box4').off('click', onClick)
      $('#box5').off('click', onClick)
      $('#box6').off('click', onClick)
      $('#box7').off('click', onClick)
      $('#box8').off('click', onClick)
    }
    return draws
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFail)
}

const onUpdateMove = function (updateMoveObject) {
  console.log('onUpdateMove has been called!')
  console.log('updateMoveObject is now' + updateMoveObject)
  console.log('after setting cell to empty array, updateMoveObject.game.cell is ' + updateMoveObject.game.cell)

  // ID=135 TOKEN="BAhJIiUwNmViMTViMDdlZGFmMmZiMjk0YzQxNjNjNDUxY2UzMAY6BkVG--e64ed808852358ceba321f7c825486e278846855" INDEX=0 VALUE='x' OVER=FALSE sh curl-scripts/addMove.sh

  // api.updateMove()
  //   .then(authUi.updateMoveSuccess)
  //   .catch(authUi.updateMoveFail)
}

const onNewGame = function (event) {
  event.preventDefault()
  document.getElementById('box0').innerHTML = ' '
  document.getElementById('box1').innerHTML = ' '
  document.getElementById('box2').innerHTML = ' '
  document.getElementById('box3').innerHTML = ' '
  document.getElementById('box4').innerHTML = ' '
  document.getElementById('box5').innerHTML = ' '
  document.getElementById('box6').innerHTML = ' '
  document.getElementById('box7').innerHTML = ' '
  document.getElementById('box8').innerHTML = ' '
  $('#box0').off('click', onClick)
  $('#box1').off('click', onClick)
  $('#box2').off('click', onClick)
  $('#box3').off('click', onClick)
  $('#box4').off('click', onClick)
  $('#box5').off('click', onClick)
  $('#box6').off('click', onClick)
  $('#box7').off('click', onClick)
  $('#box8').off('click', onClick)
  $('#box0').one('click', onClick)
  $('#box1').one('click', onClick)
  $('#box2').one('click', onClick)
  $('#box3').one('click', onClick)
  $('#box4').one('click', onClick)
  $('#box5').one('click', onClick)
  $('#box6').one('click', onClick)
  $('#box7').one('click', onClick)
  $('#box8').one('click', onClick)
  boxes[0].value = null
  boxes[1].value = null
  boxes[2].value = null
  boxes[3].value = null
  boxes[4].value = null
  boxes[5].value = null
  boxes[6].value = null
  boxes[7].value = null
  boxes[8].value = null
  round = 0
  api.createGame()
    .then(authUi.createGameSuccess)
    .catch(authUi.createGameFail)
}

const onGetGameData = function (event) {
  event.preventDefault()
  api.getGameData()
    .then(authUi.getGameDataSuccess)
    .catch(authUi.getGameDataFail)
}

const onGetThisGameData = function (event) {
  event.preventDefault()
  api.getThisGameData()
    .then(authUi.getThisGameDataSuccess)
    .catch(authUi.getThisGameDataFail)
}

module.exports = {
  onClick: onClick,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onNewGame: onNewGame,
  onGetGameData: onGetGameData,
  onUpdateMove: onUpdateMove,
  onGetThisGameData: onGetThisGameData,
  updateMoveObject: updateMoveObject
}
