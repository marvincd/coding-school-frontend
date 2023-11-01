import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackIllustrationComponent } from './feedback-illustration.component';

describe('FeedbackIllustrationComponent', () => {
  let component: FeedbackIllustrationComponent;
  let fixture: ComponentFixture<FeedbackIllustrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackIllustrationComponent]
    });
    fixture = TestBed.createComponent(FeedbackIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
