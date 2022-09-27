import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterchildComponent } from './counterchild.component';

describe('CounterchildComponent', () => {
  let component: CounterchildComponent;
  let fixture: ComponentFixture<CounterchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
