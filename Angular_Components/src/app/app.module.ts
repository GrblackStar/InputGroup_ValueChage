import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringBoundComponentsViewComponent } from './string-bound-components-view/string-bound-components-view.component';
import { IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxSelectModule, IgxSwitchModule, IgxCheckboxModule, IgcFormsModule, IgxRadioModule, IgxSliderModule, IgxDatePickerModule, IgxCalendarModule, IgxSimpleComboModule, IgxComboModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { BoolBoundComponentsViewComponent } from './bool-bound-components-view/bool-bound-components-view.component';
import { NumBoundComponentsViewComponent } from './num-bound-components-view/num-bound-components-view.component';
import { DateBoundComponentsViewComponent } from './date-bound-components-view/date-bound-components-view.component';
import { MasterViewComponent } from './master-view/master-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StringBoundComponentsViewComponent,
    BoolBoundComponentsViewComponent,
    NumBoundComponentsViewComponent,
    DateBoundComponentsViewComponent,
    MasterViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxSelectModule,
    FormsModule,
    IgxSwitchModule,
    IgxCheckboxModule,
    IgcFormsModule,
    IgxRadioModule,
    IgxSliderModule,
    IgxDatePickerModule,
    IgxCalendarModule,
    IgxSimpleComboModule,
    IgxComboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
