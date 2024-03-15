import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { StringBoundComponentsViewComponent } from './string-bound-components-view/string-bound-components-view.component';
import { BoolBoundComponentsViewComponent } from './bool-bound-components-view/bool-bound-components-view.component';
import { NumBoundComponentsViewComponent } from './num-bound-components-view/num-bound-components-view.component';
import { DateBoundComponentsViewComponent } from './date-bound-components-view/date-bound-components-view.component';
import { MasterViewComponent } from './master-view/master-view.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'string-bound-components-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'string-bound-components-view', component: StringBoundComponentsViewComponent, data: { text: 'StringBoundComponentsView' } },
  { path: 'bool-bound-components-view', component: BoolBoundComponentsViewComponent, data: { text: 'BoolBoundComponentsView' } },
  { path: 'num-bound-components-view', component: NumBoundComponentsViewComponent, data: { text: 'NumBoundComponentsView' } },
  { path: 'date-bound-components-view', component: DateBoundComponentsViewComponent, data: { text: 'DateBoundComponentsView' } },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true }), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
