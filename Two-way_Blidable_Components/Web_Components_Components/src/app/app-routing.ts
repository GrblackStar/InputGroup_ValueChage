import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './string-bound-components-view/string-bound-components-view';
import './bool-bound-components-view/bool-bound-components-view';
import './num-bound-components-view/num-bound-components-view';
import './date-bound-components-view/date-bound-components-view';
import './master-view/master-view';

export const routes: Route[] = [
  { path: '', component: 'app-string-bound-components-view', name: 'StringBoundComponentsView' },
  { path: 'string-bound-components-view', component: 'app-string-bound-components-view', name: 'StringBoundComponentsView' },
  { path: 'bool-bound-components-view', component: 'app-bool-bound-components-view', name: 'BoolBoundComponentsView' },
  { path: 'num-bound-components-view', component: 'app-num-bound-components-view', name: 'NumBoundComponentsView' },
  { path: 'date-bound-components-view', component: 'app-date-bound-components-view', name: 'DateBoundComponentsView' },
  { path: 'master-view', component: 'app-master-view', name: 'Master View' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
