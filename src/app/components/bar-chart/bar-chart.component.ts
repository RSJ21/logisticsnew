import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
  public chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
          renderTo: 'container2',
          type: 'bar',
          height: '250'
      },
      title:{
          text:''
      },
      yAxis: {
        title: {
            text: 'Tariff',
            
        }
    },
    xAxis: {
      categories: ['2015', '2016', '2017', '2018', '2019'],
},
  colors:['#4CAF50','#FFFF00','#4CAF50','#FFFF00','#4CAF50'],
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
      data: [['2015', 45],['2016', 34],['2017', 52],['2018',39],['2019',27]]
  }]
  })
 }
}
