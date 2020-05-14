import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardRequestsComponent } from './dasboard-requests.component';

describe('DasboardRequestsComponent', () => {
  let component: DasboardRequestsComponent;
  let fixture: ComponentFixture<DasboardRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
