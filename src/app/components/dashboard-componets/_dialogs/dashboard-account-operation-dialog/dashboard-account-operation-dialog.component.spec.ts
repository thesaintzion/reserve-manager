import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAccountOperationDialogComponent } from './dashboard-account-operation-dialog.component';

describe('DashboardAccountOperationDialogComponent', () => {
  let component: DashboardAccountOperationDialogComponent;
  let fixture: ComponentFixture<DashboardAccountOperationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAccountOperationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAccountOperationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
