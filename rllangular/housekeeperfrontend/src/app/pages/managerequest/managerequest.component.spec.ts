import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerequestComponent } from './managerequest.component';

describe('ManagerequestComponent', () => {
  let component: ManagerequestComponent;
  let fixture: ComponentFixture<ManagerequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerequestComponent]
    });
    fixture = TestBed.createComponent(ManagerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
