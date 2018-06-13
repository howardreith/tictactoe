const getFormFields = require('../../lib/get-form-fields')
const authUi = require('./ui.js')
const api = require('./api.js')

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

const onClick = function (event) {
  event.preventDefault()
  round = round + 1 // round tracker
  if (round % 2 === 1) {
    document.getElementById(this.id).innerHTML = 'X'
    const theNum = this.id.replace(/^\D+/g, '')
    boxes[theNum].value = 'x'
    $('.turn-notifier').text("Player O's turn")
  } else if (round % 2 === 0) {
    document.getElementById(this.id).innerHTML = 'O'
    const theNum = this.id.replace(/^\D+/g, '')
    boxes[theNum].value = 'o'
    $('.turn-notifier').text("Player X's turn")
  }
  if (boxes[0].value === 'x' && boxes[1].value === 'x' && boxes[2].value === 'x') {
    winner = 'Player 1'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player X Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    // Need to add function that notifies server of win.
    return player1Wins
  } else if (boxes[3].value === 'x' && boxes[4].value === 'x' && boxes[5].value === 'x') {
    winner = 'Player 1'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player X Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player1Wins
  } else if (boxes[6].value === 'x' && boxes[7].value === 'x' && boxes[8].value === 'x') {
    winner = 'Player 1'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player X Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player1Wins
  } else if (boxes[0].value === 'x' && boxes[3].value === 'x' && boxes[6].value === 'x') {
    winner = 'Player 1'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player X Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player1Wins
  } else if (boxes[1].value === 'x' && boxes[4].value === 'x' && boxes[7].value === 'x') {
    winner = 'Player 1'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player X Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player1Wins
  } else if (boxes[2].value === 'x' && boxes[5].value === 'x' && boxes[8].value === 'x') {
    winner = 'Player 1'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player X Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player1Wins
  } else if (boxes[0].value === 'x' && boxes[4].value === 'x' && boxes[8].value === 'x') {
    winner = 'Player 1'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player X Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player1Wins
  } else if (boxes[2].value === 'x' && boxes[4].value === 'x' && boxes[6].value === 'x') {
    winner = 'Player 1'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player X Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player1Wins
  } else if (boxes[0].value === 'o' && boxes[1].value === 'o' && boxes[2].value === 'o') {
    winner = 'Player 2'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player O Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player2Wins
  } else if (boxes[3].value === 'o' && boxes[4].value === 'o' && boxes[5].value === 'o') {
    winner = 'Player 2'
    player2Wins++
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player O Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player2Wins
  } else if (boxes[6].value === 'o' && boxes[7].value === 'o' && boxes[8].value === 'o') {
    winner = 'Player 2'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player O Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player2Wins
  } else if (boxes[0].value === 'o' && boxes[3].value === 'o' && boxes[6].value === 'o') {
    winner = 'Player 2'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player O Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player2Wins
  } else if (boxes[1].value === 'o' && boxes[4].value === 'o' && boxes[7].value === 'o') {
    winner = 'Player 2'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player O Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player2Wins
  } else if (boxes[2].value === 'o' && boxes[5].value === 'o' && boxes[8].value === 'o') {
    winner = 'Player 2'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player O Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player2Wins
  } else if (boxes[0].value === 'o' && boxes[4].value === 'o' && boxes[8].value === 'o') {
    winner = 'Player 2'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player O Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player2Wins
  } else if (boxes[2].value === 'o' && boxes[4].value === 'o' && boxes[6].value === 'o') {
    winner = 'Player 2'
    // console.log('The winner is ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text('Player O Wins!')
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return player2Wins
  } else if (round > 8) {
    winner = 'Draw'
    // console.log('The game is a ' + winner)
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
      $('#box0').off('click', onUpdateMove)
      $('#box1').off('click', onUpdateMove)
      $('#box2').off('click', onUpdateMove)
      $('#box3').off('click', onUpdateMove)
      $('#box4').off('click', onUpdateMove)
      $('#box5').off('click', onUpdateMove)
      $('#box6').off('click', onUpdateMove)
      $('#box7').off('click', onUpdateMove)
      $('#box8').off('click', onUpdateMove)
      updateMoveObject.game.over = true
      $('.the-title').text("It's a draw!")
      api.updateMove(updateMoveObject)
        .then(authUi.updateMoveSuccess)
        .catch(authUi.updateMoveFail)
      // console.log('updateMoveObject.game.over is ' + updateMoveObject.game.over)
      $('#playerXScore').text('Player X: ' + player1Wins)
      $('#playerOScore').text('Player O: ' + player2Wins)
      $('#drawScore').text('Draws: ' + draws)
    }
    return draws
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('.passwords-match').hide()
  $('.email-taken').hide()

  api.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onShowSignUp = function (event) {
  event.preventDefault()
  $('#sign-up-form').show()
  $('#get-sign-up').hide()
  $('#sign-in-form').hide()
  $('.signup-success').hide()
  $('#sign-up-back').show()
  $('.email-taken').hide()
  $('.passwords-match').hide()
  $('.invalid-credentials').hide()
  document.getElementById('sign-in-form').reset()
}

const onGetChangePassword = function (event) {
  event.preventDefault()
  $('#change-password-form').show()
  $('#get-change-password').hide()
  $('#sign-out').hide()
  $('.change-confirmation').hide()
  $('#change-password-back').show()
  document.getElementById('change-password-form').reset()
}

const onChangePasswordBack = function (event) {
  event.preventDefault()
  $('#change-password-form').hide()
  $('#get-change-password').show()
  $('#sign-out').show()
  $('.change-confirmation').hide()
  $('#change-password-back').hide()
  document.getElementById('change-password-form').reset()
}

const onSignUpBack = function (event) {
  event.preventDefault()
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#get-sign-up').show()
  $('#sign-up-back').hide()
  $('.email-taken').hide()
  $('.passwords-match').hide()
  $('.invalid-credentials').hide()
  document.getElementById('sign-up-form').reset()
}

// Need to reject sign in if they're invalid.
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
  player1Wins = 0
  player2Wins = 0
  draws = 0
  $('#playerXScore').text('Player X: ' + player1Wins)
  $('#playerOScore').text('Player O: ' + player2Wins)
  $('#drawScore').text('Draws: ' + draws)
  document.getElementById('box0').innerHTML = ''
  document.getElementById('box1').innerHTML = ''
  document.getElementById('box2').innerHTML = ''
  document.getElementById('box3').innerHTML = ''
  document.getElementById('box4').innerHTML = ''
  document.getElementById('box5').innerHTML = ''
  document.getElementById('box6').innerHTML = ''
  document.getElementById('box7').innerHTML = ''
  document.getElementById('box8').innerHTML = ''
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
  thisRound = 0
  $('#user-email').text('Email: ')
  $('#games-played').text('Games Played: ')
  $('#games-completed').text('Games Completed: ')
  $('#XWins').text('Player X Wins: ')
  $('#OWins').text('Player O Wins: ')
  $('.the-title').text('Tic Tac Toe')
  $('.turn-notifier').hide()
  api.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFail)
}

let thisRound = 0

const onUpdateMove = function (event) {
  thisRound = thisRound + 1
  if (thisRound % 2 === 1) {
    const theNum = this.id.replace(/^\D+/g, '')
    updateMoveObject.game.cell.index = theNum
    updateMoveObject.game.cell.value = 'x'
    // console.log('The new values are ' + updateMoveObject.game.cell.index + updateMoveObject.game.cell.value)
  } else if (thisRound % 2 === 0) {
    const theNum = this.id.replace(/^\D+/g, '')
    updateMoveObject.game.cell.index = theNum
    updateMoveObject.game.cell.value = 'o'
    // console.log('The new values are ' + updateMoveObject.game.cell.index + updateMoveObject.game.cell.value)
  }
  api.updateMove(updateMoveObject)
    .then(authUi.updateMoveSuccess)
    .catch(authUi.updateMoveFail)
}

const onNewGame = function (event) {
  event.preventDefault()
  document.getElementById('box0').innerHTML = ''
  document.getElementById('box1').innerHTML = ''
  document.getElementById('box2').innerHTML = ''
  document.getElementById('box3').innerHTML = ''
  document.getElementById('box4').innerHTML = ''
  document.getElementById('box5').innerHTML = ''
  document.getElementById('box6').innerHTML = ''
  document.getElementById('box7').innerHTML = ''
  document.getElementById('box8').innerHTML = ''
  $('#box0').off('click', onClick)
  $('#box1').off('click', onClick)
  $('#box2').off('click', onClick)
  $('#box3').off('click', onClick)
  $('#box4').off('click', onClick)
  $('#box5').off('click', onClick)
  $('#box6').off('click', onClick)
  $('#box7').off('click', onClick)
  $('#box8').off('click', onClick)
  $('#box0').off('click', onUpdateMove)
  $('#box1').off('click', onUpdateMove)
  $('#box2').off('click', onUpdateMove)
  $('#box3').off('click', onUpdateMove)
  $('#box4').off('click', onUpdateMove)
  $('#box5').off('click', onUpdateMove)
  $('#box6').off('click', onUpdateMove)
  $('#box7').off('click', onUpdateMove)
  $('#box8').off('click', onUpdateMove)
  $('#box0').one('click', onClick)
  $('#box1').one('click', onClick)
  $('#box2').one('click', onClick)
  $('#box3').one('click', onClick)
  $('#box4').one('click', onClick)
  $('#box5').one('click', onClick)
  $('#box6').one('click', onClick)
  $('#box7').one('click', onClick)
  $('#box8').one('click', onClick)
  $('#box0').one('click', onUpdateMove)
  $('#box1').one('click', onUpdateMove)
  $('#box2').one('click', onUpdateMove)
  $('#box3').one('click', onUpdateMove)
  $('#box4').one('click', onUpdateMove)
  $('#box5').one('click', onUpdateMove)
  $('#box6').one('click', onUpdateMove)
  $('#box7').one('click', onUpdateMove)
  $('#box8').one('click', onUpdateMove)
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
  thisRound = 0
  $('.start-notifier').show()
  $('.start-notifier').delay(2000).fadeOut('fast')
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

const onGetUserStats = function (event) {
  event.preventDefault()
  api.getUserGameData()
    .then(authUi.getUserGameDataSuccess)
    .catch(authUi.getUserGameDataFail)
  $('.stats-notifier').show()
  $('.stats-notifier').delay(2000).fadeOut('fast')
}

const onResetScore = function (event) {
  event.preventDefault()
  player1Wins = 0
  player2Wins = 0
  draws = 0
  $('#playerXScore').text('Player X: ' + player1Wins)
  $('#playerOScore').text('Player O: ' + player2Wins)
  $('#drawScore').text('Draws: ' + draws)
  $('.reset-notifier').show()
  $('.reset-notifier').delay(2000).fadeOut('fast')
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
  updateMoveObject: updateMoveObject,
  onShowSignUp: onShowSignUp,
  onGetUserStats: onGetUserStats,
  onGetChangePassword: onGetChangePassword,
  onSignUpBack: onSignUpBack,
  onChangePasswordBack: onChangePasswordBack,
  onResetScore: onResetScore
}
