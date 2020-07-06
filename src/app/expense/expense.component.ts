import { Component, OnInit, Input } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})

export class ExpenseComponent implements OnInit {

  chart = [];

  breakpoint: number;
  @Input() expenseDetails = { id: '', itemName: '', itemCategory: '', itemDate: '', itemAmount: '' }

  constructor(public expenseService: ExpenseService, public router: Router) {
  }

  ngOnInit() {
    /* this.expenseService.dailyForecast()
      .subscribe(res => {

        let temp_max = res['list'].map(res => res.main.temp_max)
        let temp_min = res['list'].map(res => res.main.temp_min)
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.array.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false,
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false,
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scale: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      }) */
  }

  addExpense(dataExpense) {
    this.expenseService.createExpenses(this.expenseDetails).subscribe((data: {}) => {
      this.router.navigate(['/home'])
    })
  }

}
