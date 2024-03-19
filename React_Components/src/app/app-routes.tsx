import StringBoundComponentsView from './string-bound-components-view/string-bound-components-view';
import BoolBoundComponentsView from './bool-bound-components-view/bool-bound-components-view';
import NumBoundComponentsView from './num-bound-components-view/num-bound-components-view';
import DateBoundComponentsView from './date-bound-components-view/date-bound-components-view';
import MasterView from './master-view/master-view';
export const routes = [
  { path: '', element: <StringBoundComponentsView />, text: 'StringBoundComponentsView' },
  { path: 'string-bound-components-view', element: <StringBoundComponentsView />, text: 'StringBoundComponentsView' },
  { path: 'bool-bound-components-view', element: <BoolBoundComponentsView />, text: 'BoolBoundComponentsView' },
  { path: 'num-bound-components-view', element: <NumBoundComponentsView />, text: 'NumBoundComponentsView' },
  { path: 'date-bound-components-view', element: <DateBoundComponentsView />, text: 'DateBoundComponentsView' },
  { path: 'master-view', element: <MasterView />, text: 'Master View' }
];
