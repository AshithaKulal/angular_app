import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledisplayComponent } from './mobiledisplay.component';

describe('MobiledisplayComponent', () => {
  let component: MobiledisplayComponent;
  let fixture: ComponentFixture<MobiledisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiledisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
