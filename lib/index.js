'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterRedux = require('react-router-redux');

var _createDva = require('./createDva');

var _createDva2 = _interopRequireDefault(_createDva);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createDva2.default)({
  mobile: false,
  initialReducer: {
    routing: _reactRouterRedux.routerReducer
  },
  defaultHistory: (0, _createBrowserHistory2.default)(),
  routerMiddleware: _reactRouterRedux.routerMiddleware,

  setupHistory: function setupHistory(history) {
    this._history = history;
  }
});
module.exports = exports['default'];