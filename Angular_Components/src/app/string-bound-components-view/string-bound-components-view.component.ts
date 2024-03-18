import { Component } from '@angular/core';

@Component({
  selector: 'app-string-bound-components-view',
  templateUrl: './string-bound-components-view.component.html',
  styleUrls: ['./string-bound-components-view.component.scss']
})
export class StringBoundComponentsViewComponent {
  public stringVariable? = "Apple";
  public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
}
