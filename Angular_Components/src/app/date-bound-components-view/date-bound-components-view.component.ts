import { Component } from '@angular/core';

@Component({
  selector: 'app-date-bound-components-view',
  templateUrl: './date-bound-components-view.component.html',
  styleUrls: ['./date-bound-components-view.component.scss']
})
export class DateBoundComponentsViewComponent {
    public date = new Date(2018, 10, 27, 11, 45, 0, 0);
    public min = new Date(2018, 10, 27, 6, 30, 15, 0);
    public max = new Date(2018, 10, 27, 14, 20, 30, 0);
    public dateVariable = new Date();
    public readonly = false;
}
