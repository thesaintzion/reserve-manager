import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBankDetailsComponent } from './dashboard-bank-details.component';

describe('DashboardBankDetailsComponent', () => {
  let component: DashboardBankDetailsComponent;
  let fixture: ComponentFixture<DashboardBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
