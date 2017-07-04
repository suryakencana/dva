// import { createBrowserHistory } from 'history/createBrowserHistory';
import ReactRouter from 'react-router';
import { routerReducer as routing, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createDva from './createDva';

export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: ReactRouter.hashHistory,
  routerMiddleware,

  setupHistory(history) {
    this._history = syncHistoryWithStore(history, this._store);
  },
});
