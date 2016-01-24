'use strict';

var h = require('mercury').h;
var extend = require('xtend');

function node (tag, defaults) {
  return function (props) {
    return function (children) {
      return h(tag, extend(defaults, props), children)
    }
  }
}

var atoms = {
  'button': {},
  'ul': {},
  'li': {},
  'div': {}
};

var views = {};

for (var a in atoms) {
  views[a] = node(a, atoms[a]);
}

module.exports = views;
