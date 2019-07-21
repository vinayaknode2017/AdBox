import { Component, OnInit, Input, OnChanges } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit, OnChanges {
@Input() height: string;
@Input() width: string;

graphHeight: string;
graphWidth: string;

  constructor() { }

  ngOnInit() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  ngOnChanges() {
    this.graphHeight = this.height + '%';
    this.graphWidth = this.width + '%';
  }

  private drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', ''],
          ['Target audience',     11],
          ['Non target audience',      2],
        ]);

        var options = {
          is3D: true,
          legend: 'none',
          backgroundColor: '#FAFAFA',
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
}
