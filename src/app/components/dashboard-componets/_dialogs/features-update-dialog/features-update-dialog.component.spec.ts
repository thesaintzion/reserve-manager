import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesUpdateDialogComponent } from './features-update-dialog.component';

describe('FeaturesUpdateDialogComponent', () => {
  let component: FeaturesUpdateDialogComponent;
  let fixture: ComponentFixture<FeaturesUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
