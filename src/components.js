'use strict';

var e = require('./elements.js');
var R = require('ramda');
var h = require('mercury').h;
var c = {};

c.Item = function(state) {
  return e.div({ className: 'item' })(state.name)
};

c.List = function (state, prop, view) {
  var lens = R.lensProp(prop);
  var arr = R.view(lens, state);
  var items = R.map(view, arr);
  return e.div({ className: 'ui relaxed divided list' })(items)
};

c.UserItem = c.Item
/*, function(state) {
  return h('i', state.name)
})
*/
c.UserList = R.partialRight(c.List, ['users', c.UserItem]);

module.exports = c;
