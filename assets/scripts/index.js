'use strict'

const events = require('./events')

$(() => {
  $('#box0').one('click', events.onClick)
  $('#box1').one('click', events.onClick)
  $('#box2').one('click', events.onClick)
  $('#box3').one('click', events.onClick)
  $('#box4').one('click', events.onClick)
  $('#box5').one('click', events.onClick)
  $('#box6').one('click', events.onClick)
  $('#box7').one('click', events.onClick)
  $('#box8').one('click', events.onClick)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#reset').on('click', events.onReset)
})
