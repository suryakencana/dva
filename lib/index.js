'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createHashHistory = require('history/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _reactRouterRedux = require('react-router-redux');

var _createDva = require('./createDva');

var _createDva2 = _interopRequireDefault(_createDva);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createHashHistory2.default)();

exports.default = (0, _createDva2.default)({
  mobile: false,
  initialReducer: {
    routing: _reactRouterRedux.routerReducer
  },
  defaultHistory: history,
  routerMiddleware: _reactRouterRedux.routerMiddleware,

  setupHistory: function setupHistory(_history) {
    this._history = (0, _reactRouterRedux.syncHistoryWithStore)(_history, this._store);
  }
});
module.exports = exports['default'];