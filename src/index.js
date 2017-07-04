import createHistory from 'history/createBrowserHistory';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import createDva from './createDva';

const history = createHistory();

export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: history,
  routerMiddleware,

  // setupHistory(history_) {
  //   this._history = syncHistoryWithStore(history_, this._store);
  // },
});
