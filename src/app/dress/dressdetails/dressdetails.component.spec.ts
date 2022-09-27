import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressdetailsComponent } from './dressdetails.component';

describe('DressdetailsComponent', () => {
  let component: DressdetailsComponent;
  let fixture: ComponentFixture<DressdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
