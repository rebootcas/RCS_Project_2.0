import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecondPageComponent } from './home-second-page.component';

describe('HomeSecondPageComponent', () => {
  let component: HomeSecondPageComponent;
  let fixture: ComponentFixture<HomeSecondPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSecondPageComponent]
    });
    fixture = TestBed.createComponent(HomeSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
