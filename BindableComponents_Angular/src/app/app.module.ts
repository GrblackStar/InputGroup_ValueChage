import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { IgxCheckboxModule, IgxSwitchModule, IgxRadioModule, IgxSelectModule, IgxInputGroupModule, IgxCalendarModule, IgxSliderModule, IgxDatePickerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MasterViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCheckboxModule,
    IgxSwitchModule,
    IgxRadioModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxCalendarModule,
    IgxSliderModule,
    IgxDatePickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
