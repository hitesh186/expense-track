import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpenseComponent } from './expense/expense.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: 'expense',
    component: ExpenseComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'app-report',
    component: ReportComponent
  },
  {
    path: '**',
    component: ExpenseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
