import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsectionComponent } from './bottomsection.component';

describe('BottomsectionComponent', () => {
  let component: BottomsectionComponent;
  let fixture: ComponentFixture<BottomsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomsectionComponent]
    });
    fixture = TestBed.createComponent(BottomsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
