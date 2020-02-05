import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';

declare var require: any;

import { Highcharts } from 'angular-highcharts';

@Component({
    selector: 'dashboard-chart',
    templateUrl: './dashboard-chart.component.html'
})
export class DashboardChartComponent implements OnInit {

    public chart: Chart;

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
                min:0,
                max:40,
                title: {
                    text: 'Tariff per km',
                    
                }
            },
            xAxis: {
                    categories: ['28/1', '29/1', '30/1', '31/1', '1/2','2/2','3/2'],
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                data: [['28/1', 25],['29/1', 32],['30/1',30],['31/1',35],['1/2',40],['2/2',40],['3/2',33]]
            }]
        });

    }

}

