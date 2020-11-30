import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsChartComponent } from './highcharts-chart.component';

describe('HighchartsChartComponent', () => {
  let component: HighchartsChartComponent;
  let fixture: ComponentFixture<HighchartsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
