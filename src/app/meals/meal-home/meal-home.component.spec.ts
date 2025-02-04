import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealHomeComponent } from './meal-home.component';

describe('MealHomeComponent', () => {
  let component: MealHomeComponent;
  let fixture: ComponentFixture<MealHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
