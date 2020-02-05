import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts'
import * as HighchartsMore from 'highcharts/highcharts-more.src.js'
HighchartsMore(Highcharts)

@Component({
  selector: 'bubble',
  templateUrl: './bubble.component.html'
})
export class BubbleComponent implements OnInit {

  public chart: Chart;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
          renderTo: 'container2',
          type: 'line',
          height: '285'
      },
      title:{
          text:''
      },
      yAxis: {
        min:60,
        max:100,
        title: {
            text: 'Load to truck Ratio',
            
        }
    },
    xAxis: {
            categories: ['Chennai', 'Hyderabad', 'Nagpur', 'Agra', 'Delhi'],
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        data: [['Chennai', 85],['Hyderabad', 84],['Nagpur', 83],['Agra',80],['Delhi',79]]
    }]
  });

  }

}
