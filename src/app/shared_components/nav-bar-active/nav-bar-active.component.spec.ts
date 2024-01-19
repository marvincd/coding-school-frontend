import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarActiveComponent } from './nav-bar-active.component';

describe('NavBarActiveComponent', () => {
  let component: NavBarActiveComponent;
  let fixture: ComponentFixture<NavBarActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarActiveComponent]
    });
    fixture = TestBed.createComponent(NavBarActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
