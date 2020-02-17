import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAccountDetailComponent } from './dashboard-account-detail.component';

describe('DashboardAccountDetailComponent', () => {
  let component: DashboardAccountDetailComponent;
  let fixture: ComponentFixture<DashboardAccountDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAccountDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
