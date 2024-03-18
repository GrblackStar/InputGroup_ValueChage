import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgcFormsModule, IgxRadioModule, IgxSliderModule } from 'igniteui-angular';
import { NumBoundComponentsViewComponent } from './num-bound-components-view.component';

describe('NumBoundComponentsViewComponent', () => {
  let component: NumBoundComponentsViewComponent;
  let fixture: ComponentFixture<NumBoundComponentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumBoundComponentsViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgcFormsModule, IgxRadioModule, IgxSliderModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumBoundComponentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
