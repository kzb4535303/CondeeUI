import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdAlertComponent } from './cd-alert.component';

describe('CdAlertComponent', () => {
  let component: CdAlertComponent;
  let fixture: ComponentFixture<CdAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
