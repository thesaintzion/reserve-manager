import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutMainComponent } from './site-layout-main.component';

describe('SiteLayoutMainComponent', () => {
  let component: SiteLayoutMainComponent;
  let fixture: ComponentFixture<SiteLayoutMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLayoutMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
