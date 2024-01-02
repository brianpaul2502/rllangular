import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthkdetailsComponent } from './posthkdetails.component';

describe('PosthkdetailsComponent', () => {
  let component: PosthkdetailsComponent;
  let fixture: ComponentFixture<PosthkdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosthkdetailsComponent]
    });
    fixture = TestBed.createComponent(PosthkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
