import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxSwitchModule, IgxCheckboxModule } from 'igniteui-angular';
import { BoolBoundComponentsViewComponent } from './bool-bound-components-view.component';

describe('BoolBoundComponentsViewComponent', () => {
  let component: BoolBoundComponentsViewComponent;
  let fixture: ComponentFixture<BoolBoundComponentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoolBoundComponentsViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxSwitchModule, IgxCheckboxModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolBoundComponentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
