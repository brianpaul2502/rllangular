import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkdetailsComponent } from './hkdetails.component';

describe('HkdetailsComponent', () => {
  let component: HkdetailsComponent;
  let fixture: ComponentFixture<HkdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HkdetailsComponent]
    });
    fixture = TestBed.createComponent(HkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
