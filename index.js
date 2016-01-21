'use strict';

var h = require('virtual-dom/h');
var extend = require('xtend');
var toHTML = require('vdom-to-html');
var compose = require(__dirname + '/compose.js');
var isString = require('x-is-string')

var atoms = {
  'button': {},
  'div': {},
  'i': {}
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
var Button = views.button({ className: 'ui button' });
var VisibleContent = views.div({ className: 'visible content' });
var HiddenContent= views.div({ className: 'hidden content' });
var ShopIcon = views.i({ className: 'shop icon' });

var AnimatedButton = compose(Button)

// plain button
console.log(toHTML(Button('Hello World')))

// Semantic UI button
var myButton = AnimatedButton([VisibleContent('Hello'), HiddenContent(ShopIcon())]);

console.log(toHTML(myButton));

module.exports = myButton;
