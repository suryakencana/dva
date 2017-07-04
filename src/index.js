import createHistory from 'history/createBrowserHistory';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import createDva from './createDva';


export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: createHistory(),
  routerMiddleware,

  setupHistory(history) {
    this._history = history;
  },
});
