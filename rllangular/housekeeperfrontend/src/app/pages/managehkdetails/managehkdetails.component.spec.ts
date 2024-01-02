import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehkdetailsComponent } from './managehkdetails.component';

describe('ManagehkdetailsComponent', () => {
  let component: ManagehkdetailsComponent;
  let fixture: ComponentFixture<ManagehkdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagehkdetailsComponent]
    });
    fixture = TestBed.createComponent(ManagehkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
