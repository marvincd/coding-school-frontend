import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionIllustrationComponent } from './instruction-illustration.component';

describe('InstructionIllustrationComponent', () => {
  let component: InstructionIllustrationComponent;
  let fixture: ComponentFixture<InstructionIllustrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionIllustrationComponent]
    });
    fixture = TestBed.createComponent(InstructionIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
