'use strict';

var hg = require('mercury');
var h = hg.h;
var e = require('./elements.js');
var c = require('./components.js');

module.exports = function render(state) {
  var Button = e.button({
    'ev-click': hg.send(state.channels.add, { name: 'Henri' })
  }); 
  return h('div', [ 
    c.UserList(state),
    Button('hello')
  ])
}
