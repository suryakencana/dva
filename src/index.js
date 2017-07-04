import createHashHistory from 'history/createHashHistory';

import {
  routerMiddleware,
  syncHistoryWithStore,
  routerReducer as routing,
} from 'react-router-redux';
import createDva from './createDva';

const history = createHashHistory();

export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: history,
  routerMiddleware,

  setupHistory(_history) {
    this._history = syncHistoryWithStore(_history, this._store);
  },
});
