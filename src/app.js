'use strict';

var hg = require('mercury');

function App(initialState) {
  var state = hg.state({
    users: hg.array(initialState.users || []),
    _hotVersion: hg.value(0),
    channels: {
      add: add
    }
  });
  return state;
};

function add(state, data) {
  state.users.push({
    name: data.name
  });
}

module.exports = App;
