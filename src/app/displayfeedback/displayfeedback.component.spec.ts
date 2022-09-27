import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfeedbackComponent } from './displayfeedback.component';

describe('DisplayfeedbackComponent', () => {
  let component: DisplayfeedbackComponent;
  let fixture: ComponentFixture<DisplayfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
