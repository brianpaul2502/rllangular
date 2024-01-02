import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresetpassComponent } from './adminresetpass.component';

describe('EresetpassComponent', () => {
  let component: AdminresetpassComponent;
  let fixture: ComponentFixture<AdminresetpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminresetpassComponent]
    });
    fixture = TestBed.createComponent(AdminresetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
