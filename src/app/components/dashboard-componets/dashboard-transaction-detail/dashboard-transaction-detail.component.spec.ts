import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransactionDetailComponent } from './dashboard-transaction-detail.component';

describe('DashboardTransactionDetailComponent', () => {
  let component: DashboardTransactionDetailComponent;
  let fixture: ComponentFixture<DashboardTransactionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTransactionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTransactionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
