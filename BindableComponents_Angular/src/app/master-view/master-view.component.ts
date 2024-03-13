import { Component } from '@angular/core';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {
  public dateVar?: Date;
  public stringVar?: string;
  public boolVar: boolean = false;
  public numVar?: number;
}
