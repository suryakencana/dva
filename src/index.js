import { createBrowserHistory } from 'history/createBrowserHistory';
import { routerReducer as routing, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createDva from './createDva';

const customHistory = createBrowserHistory();

export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: customHistory,
  routerMiddleware,

  setupHistory(history) {
    this._history = syncHistoryWithStore(history, this._store);
  },
});
