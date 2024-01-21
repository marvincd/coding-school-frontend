import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardProfileComponent } from './course-card-profile.component';

describe('CourseCardComponent', () => {
  let component: CourseCardProfileComponent;
  let fixture: ComponentFixture<CourseCardProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardProfileComponent]
    });
    fixture = TestBed.createComponent(CourseCardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
