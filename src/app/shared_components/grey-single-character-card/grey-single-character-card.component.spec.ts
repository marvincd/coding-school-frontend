import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreySingleCharacterCardComponent } from './grey-single-character-card.component';

describe('GreySingleCharacterCardComponent', () => {
  let component: GreySingleCharacterCardComponent;
  let fixture: ComponentFixture<GreySingleCharacterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreySingleCharacterCardComponent]
    });
    fixture = TestBed.createComponent(GreySingleCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
