import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkdetailsPage } from './drinkdetails.page';

describe('DrinkdetailsPage', () => {
  let component: DrinkdetailsPage;
  let fixture: ComponentFixture<DrinkdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrinkdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
