import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardAddTransactionDialogComponent } from './dasboard-add-transaction-dialog.component';

describe('DasboardAddTransactionDialogComponent', () => {
  let component: DasboardAddTransactionDialogComponent;
  let fixture: ComponentFixture<DasboardAddTransactionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardAddTransactionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardAddTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
