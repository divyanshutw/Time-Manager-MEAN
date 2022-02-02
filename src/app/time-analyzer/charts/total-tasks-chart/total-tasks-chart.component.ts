import { Component } from '@angular/core';
import {ChartDataset, ChartOptions, ChartType, Color} from 'chart.js';

@Component({
  selector: 'app-total-tasks-chart',
  templateUrl: './total-tasks-chart.component.html',
  styleUrls: ['./total-tasks-chart.component.css']
})
export class TotalTasksChartComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['20/01/2022', '21/01/2022', '22/01/2022', '23/01/2022', '24/01/2022', '25/01/2022', '26/01/2022','27/01/2022','28/01/2022','29/01/2022','30/01/2022'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [19, 5, 8, 8, 16, 11, 4,9,10,12,14], label: 'Total tasks'}
  ];
  constructor() {}
}
