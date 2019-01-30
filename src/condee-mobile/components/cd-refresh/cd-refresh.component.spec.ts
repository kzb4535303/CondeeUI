import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdRefreshComponent } from './cd-refresh.component';

describe('CdRefreshComponent', () => {
  let component: CdRefreshComponent;
  let fixture: ComponentFixture<CdRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
