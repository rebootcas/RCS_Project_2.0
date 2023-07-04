import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDevComponent } from './app-dev.component';

describe('AppDevComponent', () => {
  let component: AppDevComponent;
  let fixture: ComponentFixture<AppDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDevComponent]
    });
    fixture = TestBed.createComponent(AppDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
