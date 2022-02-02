import { Component } from '@angular/core';
import {ChartDataset, ChartOptions, ChartType, Color} from 'chart.js';
@Component({
  selector: 'app-efficiency-chart',
  templateUrl: './efficiency-chart.component.html',
  styleUrls: ['./efficiency-chart.component.css']
})
export class EfficiencyChartComponent {
  
  public lineChartLabels: string[] = ['20/01/2022', '21/01/2022', '22/01/2022', '23/01/2022', '24/01/2022', '25/01/2022', '26/01/2022','27/01/2022','28/01/2022','29/01/2022','30/01/2022'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = ['black','rgba(255,0,0,0.3)'
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  public chartColors: Array<any> = [
      { // first color
        backgroundColor: 'rgba(225,10,24,0.2)',
        borderColor: 'rgba(225,10,24,0.2)',
        pointBackgroundColor: 'rgba(225,10,24,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
      },
      { // second color
        backgroundColor: 'rgba(225,10,24,0.2)',
        borderColor: 'rgba(225,10,24,0.2)',
        pointBackgroundColor: 'rgba(225,10,24,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
      }]

  public lineChartData: any = [
      { data: [65, 59, 80, 81, 56, 55, 40,75,85,62,95], label: 'Efficiency',
      backgroundColor: "rgb(229,229,229)",
      pointBackgroundColor: "rgba(229, 229, 229, 1)",
      pointHoverBackgroundColor: "rgba(151,187,205,1)",
      borderColor: "rgba(255,255,0,1)",
      pointBorderColor: "#cc3300",
      pointHoverBorderColor: "rgba(151,187,205,1)"
    }];


  constructor() { }
}
