import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueMultiCharacterCardComponent } from './blue-multi-character-card.component';

describe('BlueMultiCharacterCardComponent', () => {
  let component: BlueMultiCharacterCardComponent;
  let fixture: ComponentFixture<BlueMultiCharacterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueMultiCharacterCardComponent]
    });
    fixture = TestBed.createComponent(BlueMultiCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
