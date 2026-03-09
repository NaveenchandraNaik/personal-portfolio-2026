import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIcons } from './app-icons';

describe('AppIcons', () => {
  let component: AppIcons;
  let fixture: ComponentFixture<AppIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppIcons],
    }).compileComponents();

    fixture = TestBed.createComponent(AppIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
