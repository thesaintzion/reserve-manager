import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTransferDialogComponent } from './dashboard-transfer-dialog.component';

describe('DashboardTransferDialogComponent', () => {
  let component: DashboardTransferDialogComponent;
  let fixture: ComponentFixture<DashboardTransferDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTransferDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTransferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
