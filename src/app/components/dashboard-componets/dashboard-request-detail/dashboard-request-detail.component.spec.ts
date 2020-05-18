import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRequestDetailComponent } from './dashboard-request-detail.component';

describe('DashboardRequestDetailComponent', () => {
  let component: DashboardRequestDetailComponent;
  let fixture: ComponentFixture<DashboardRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
