import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxInputGroupModule, IgxCalendarModule } from 'igniteui-angular';
import { DateBoundComponentsViewComponent } from './date-bound-components-view.component';

describe('DateBoundComponentsViewComponent', () => {
  let component: DateBoundComponentsViewComponent;
  let fixture: ComponentFixture<DateBoundComponentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateBoundComponentsViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxInputGroupModule, IgxCalendarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateBoundComponentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
