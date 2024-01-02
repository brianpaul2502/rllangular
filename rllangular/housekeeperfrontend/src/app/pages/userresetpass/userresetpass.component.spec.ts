import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresetpassComponent } from './userresetpass.component';

describe('UserresetpassComponent', () => {
  let component: UserresetpassComponent;
  let fixture: ComponentFixture<UserresetpassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserresetpassComponent]
    });
    fixture = TestBed.createComponent(UserresetpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
