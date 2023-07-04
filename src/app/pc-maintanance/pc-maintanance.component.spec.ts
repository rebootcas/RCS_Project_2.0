import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcMaintananceComponent } from './pc-maintanance.component';

describe('PcMaintananceComponent', () => {
  let component: PcMaintananceComponent;
  let fixture: ComponentFixture<PcMaintananceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcMaintananceComponent]
    });
    fixture = TestBed.createComponent(PcMaintananceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
