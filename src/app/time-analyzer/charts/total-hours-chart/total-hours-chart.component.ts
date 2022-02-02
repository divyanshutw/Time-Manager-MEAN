import { Component } from '@angular/core';
import {ChartDataset, ChartOptions, ChartType, Color} from 'chart.js';

@Component({
  selector: 'app-total-hours-chart',
  templateUrl: './total-hours-chart.component.html',
  styleUrls: ['./total-hours-chart.component.css']
})
export class TotalHoursChartComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['20/01/2022', '21/01/2022', '22/01/2022', '23/01/2022', '24/01/2022', '25/01/2022', '26/01/2022','27/01/2022','28/01/2022','29/01/2022','30/01/2022'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [8, 6, 10, 9, 8.5, 11, 5,9,10,7.5,8], label: 'Total hours worked'}
  ];

  constructor() {}
}
