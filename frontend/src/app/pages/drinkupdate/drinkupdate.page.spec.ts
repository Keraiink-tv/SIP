import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkupdatePage } from './drinkupdate.page';

describe('DrinkupdatePage', () => {
  let component: DrinkupdatePage;
  let fixture: ComponentFixture<DrinkupdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrinkupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
