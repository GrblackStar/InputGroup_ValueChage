import { Component } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-num-bound-components-view',
  templateUrl: './num-bound-components-view.component.html',
  styleUrls: ['./num-bound-components-view.component.scss']
})
export class NumBoundComponentsViewComponent {
  public numVariable?: number;
}
