const getFormFields = require('../../lib/get-form-fields')
const authUi = require('./ui.js')
const api = require('./api.js')

// Find a way to make a variable ++ based on the value of the html element
// we created above.
let round = 0
let gameOn = true

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

const onClick = function (event) {
  event.preventDefault()
  // console.log('OMG A CLICK')
  // console.log('event is' + this.id)
  // console.log(typeof this.id)
  round++
  console.log('Round ' + round)
  if (round % 2 === 1) {
    document.getElementById(this.id).innerHTML = 'x'
    const theNum = this.id.replace(/^\D+/g, '')
    boxes[theNum].value = 'x'
    // console.log('theNum is' + theNum + 'and boxes[theNum].value is' + boxes[theNum].value)
  } else if (round % 2 === 0) {
    document.getElementById(this.id).innerHTML = 'o'
    const theNum = this.id.replace(/^\D+/g, '')
    boxes[theNum].value = 'o'
    // console.log('theNum is' + theNum + 'and boxes[theNum].value is' + boxes[theNum].value)
  }
  console.log('The round in here is ' + round)
  if (boxes[0].value === 'x' && boxes[1].value === 'x' && boxes[2].value === 'x') {
    const winner = 'Player 1'
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
  } else if (boxes[3].value === 'x' && boxes[4].value === 'x' && boxes[5].value === 'x') {
    const winner = 'Player 1'
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
  } else if (boxes[6].value === 'x' && boxes[7].value === 'x' && boxes[8].value === 'x') {
    const winner = 'Player 1'
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
  } else if (boxes[0].value === 'x' && boxes[3].value === 'x' && boxes[6].value === 'x') {
    const winner = 'Player 1'
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
  } else if (boxes[1].value === 'x' && boxes[4].value === 'x' && boxes[7].value === 'x') {
    const winner = 'Player 1'
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
  } else if (boxes[2].value === 'x' && boxes[5].value === 'x' && boxes[8].value === 'x') {
    const winner = 'Player 1'
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
  } else if (boxes[0].value === 'x' && boxes[4].value === 'x' && boxes[8].value === 'x') {
    const winner = 'Player 1'
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
  } else if (boxes[2].value === 'x' && boxes[4].value === 'x' && boxes[6].value === 'x') {
    const winner = 'Player 1'
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
  } else if (boxes[0].value === 'o' && boxes[1].value === 'o' && boxes[2].value === 'o') {
    const winner = 'Player 2'
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
  } else if (boxes[3].value === 'o' && boxes[4].value === 'o' && boxes[5].value === 'o') {
    const winner = 'Player 2'
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
  } else if (boxes[6].value === 'o' && boxes[7].value === 'o' && boxes[8].value === 'o') {
    const winner = 'Player 2'
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
  } else if (boxes[0].value === 'o' && boxes[3].value === 'o' && boxes[6].value === 'o') {
    const winner = 'Player 2'
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
  } else if (boxes[1].value === 'o' && boxes[4].value === 'o' && boxes[7].value === 'o') {
    const winner = 'Player 2'
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
  } else if (boxes[2].value === 'o' && boxes[5].value === 'o' && boxes[8].value === 'o') {
    const winner = 'Player 2'
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
  } else if (boxes[0].value === 'o' && boxes[4].value === 'o' && boxes[8].value === 'o') {
    const winner = 'Player 2'
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
  } else if (boxes[2].value === 'o' && boxes[4].value === 'o' && boxes[6].value === 'o') {
    const winner = 'Player 2'
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
  } else if (round > 8) {
    const winner = 'Draw'
    console.log('The game is a ' + winner)
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

module.exports = {
  onClick: onClick,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  gameOn: gameOn
}
