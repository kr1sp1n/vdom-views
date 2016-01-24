'use strict';

//require("./css/style.css")
require("normalize.css")
require('semantic-ui-css/semantic.css')

var hg = require('mercury');
var document = require('global/document');

var App = require('./app.js');

// This render function may be replaced!
var render = require('./render.js');
App.render = function renderApp(state) {
    return render(state);
};

var initialState = {
  users: [
    { name: 'Krispin' },
    { name: 'Lisa' }
  ]
};

// Need a reference to this below.
var appState = App(initialState);

hg.app(document.body, appState, App.render);

// Special sauce: detect changes to the rendering code and swap the rendering
// function out without reloading the page.
if (module.hot) {
  module.hot.accept('./render.js', function swapModule() {
    render = require('./render.js');
    // Force a re-render by changing the application state.
    appState._hotVersion.set(appState._hotVersion() + 1);
    return true;
  });
}
