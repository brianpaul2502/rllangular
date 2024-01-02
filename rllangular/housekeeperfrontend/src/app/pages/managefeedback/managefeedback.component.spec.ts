import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefeedbackComponent } from './managefeedback.component';

describe('ManagefeedbackComponent', () => {
  let component: ManagefeedbackComponent;
  let fixture: ComponentFixture<ManagefeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagefeedbackComponent]
    });
    fixture = TestBed.createComponent(ManagefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
