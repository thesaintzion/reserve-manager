import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutAccountCreationComponent } from './site-layout-account-creation.component';

describe('SiteLayoutAccountCreationComponent', () => {
  let component: SiteLayoutAccountCreationComponent;
  let fixture: ComponentFixture<SiteLayoutAccountCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLayoutAccountCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutAccountCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
