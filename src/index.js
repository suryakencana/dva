import createHashHistory from 'history/createBrowserHistory';
import {
  routerMiddleware,
  syncHistoryWithStore,
  routerReducer as routing,
} from 'react-router-redux';
import createDva from './createDva';

export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: createHashHistory,
  routerMiddleware,

  setupHistory(history) {
    this._history = syncHistoryWithStore(history, this._store);
  },
});
