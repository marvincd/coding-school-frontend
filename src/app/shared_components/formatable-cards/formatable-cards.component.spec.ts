import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatableCardsComponent } from './formatable-cards.component';

describe('FormatableCardsComponent', () => {
  let component: FormatableCardsComponent;
  let fixture: ComponentFixture<FormatableCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatableCardsComponent]
    });
    fixture = TestBed.createComponent(FormatableCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
