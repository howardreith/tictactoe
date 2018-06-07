'use strict'

const Events = require('./events')

$(() => {
  // your JS code goes here
  $('#box0').one('click', Events.onClick)
  $('#box1').one('click', Events.onClick)
  $('#box2').one('click', Events.onClick)
  $('#box3').one('click', Events.onClick)
  $('#box4').one('click', Events.onClick)
  $('#box5').one('click', Events.onClick)
  $('#box6').one('click', Events.onClick)
  $('#box7').one('click', Events.onClick)
  $('#box8').one('click', Events.onClick)
})
