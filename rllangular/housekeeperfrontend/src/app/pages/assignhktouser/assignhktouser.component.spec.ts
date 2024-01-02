import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignhktouserComponent } from './assignhktouser.component';

describe('AssignhktouserComponent', () => {
  let component: AssignhktouserComponent;
  let fixture: ComponentFixture<AssignhktouserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignhktouserComponent]
    });
    fixture = TestBed.createComponent(AssignhktouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
