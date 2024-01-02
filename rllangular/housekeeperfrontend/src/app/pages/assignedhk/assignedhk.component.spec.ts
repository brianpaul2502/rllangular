import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedhkComponent } from './assignedhk.component';

describe('AssignedhkComponent', () => {
  let component: AssignedhkComponent;
  let fixture: ComponentFixture<AssignedhkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedhkComponent]
    });
    fixture = TestBed.createComponent(AssignedhkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
