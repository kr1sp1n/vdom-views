'use strict';

var h = require('virtual-dom/h');
var extend = require('xtend');
var R = require('ramda');
var compose = R.compose;
var isString = require('x-is-string')

var atoms = {
  'button': {},
  'div': {},
  'i': {},
  'a': { href: '#' }
};

var views = {};

function node(tag, defaults) {
  return function(props) {
    return function (children) {
      return h(tag, extend(defaults, props), children)
    }
  }
}

for (var a in atoms) {
  views[a] = node(a, atoms[a]);
}

// Semantic UI style
/*
var Button = views.button({ className: 'ui button' });
var VisibleContent = views.div({ className: 'visible content' });
var HiddenContent= views.div({ className: 'hidden content' });
var ShopIcon = views.i({ className: 'shop icon' });

var AnimatedButton = compose(Button)

// Semantic UI button
var myButton = AnimatedButton([VisibleContent('Hello'), HiddenContent(ShopIcon())]);
*/

module.exports = views;
