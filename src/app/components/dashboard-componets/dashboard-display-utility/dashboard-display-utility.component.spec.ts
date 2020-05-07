import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDisplayUtilityComponent } from './dashboard-display-utility.component';

describe('DashboardDisplayUtilityComponent', () => {
  let component: DashboardDisplayUtilityComponent;
  let fixture: ComponentFixture<DashboardDisplayUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDisplayUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDisplayUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
