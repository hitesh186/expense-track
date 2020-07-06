import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Expense } from "../services/expense";
/* import 'rxjs/add/operator/map'; */
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  public httpOptions: any;
  private serviceUrl = "http://localhost:3000/Expense";

  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getExpense(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.serviceUrl);
  }

  public createExpenses(expense: Expense) {
    return this.http.post(`${this.serviceUrl}`, expense);
  }

  public deleteExpense(id) {
    return this.http.delete<Expense>(`${this.serviceUrl}/${id}`, this.httpOptions)
  }
  public dailyForecast() {
    return this.http.get("https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1").pipe(map(result => result));
  }
}
