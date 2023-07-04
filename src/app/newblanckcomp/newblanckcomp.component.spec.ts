import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewblanckcompComponent } from './newblanckcomp.component';

describe('NewblanckcompComponent', () => {
  let component: NewblanckcompComponent;
  let fixture: ComponentFixture<NewblanckcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewblanckcompComponent]
    });
    fixture = TestBed.createComponent(NewblanckcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
