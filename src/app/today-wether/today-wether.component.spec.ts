import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWetherComponent } from './today-wether.component';

describe('TodayWetherComponent', () => {
  let component: TodayWetherComponent;
  let fixture: ComponentFixture<TodayWetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayWetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
