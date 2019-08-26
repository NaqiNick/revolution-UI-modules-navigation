import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendcComponent } from './trendc.component';

describe('TrendcComponent', () => {
  let component: TrendcComponent;
  let fixture: ComponentFixture<TrendcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
