import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  public doughnutChartLabels = ['Travel', 'Utility', ' Shopping', 'Grocery', 'Restaurant'];
  public doughnutChartData = [50, 100, 200, 70, 180];
  public doughnutChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
