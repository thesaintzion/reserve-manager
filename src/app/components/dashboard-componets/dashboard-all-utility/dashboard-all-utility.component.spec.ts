import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllUtilityComponent } from './dashboard-all-utility.component';

describe('DashboardAllUtilityComponent', () => {
  let component: DashboardAllUtilityComponent;
  let fixture: ComponentFixture<DashboardAllUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAllUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAllUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
